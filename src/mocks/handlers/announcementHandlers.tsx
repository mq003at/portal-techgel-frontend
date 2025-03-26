import { http, HttpResponse } from "msw";
import { announcementMockData as initialData } from "../../data/announcementData";
import { AnnouncementCategory } from "../../types/Models/Announcement";

let announcementMockData: AnnouncementCategory[] = structuredClone(initialData); // mutable copy

export const announcementHandlers = [
  http.get("/api/announcements", () => {
    return HttpResponse.json(announcementMockData);
  }),

  http.get("/api/announcements/:categoryId", ({ params }) => {
    const category = announcementMockData.find(
      (c) => c.id === Number(params.categoryId)
    );
    return category
      ? HttpResponse.json(category)
      : HttpResponse.json({ message: "Not found" }, { status: 404 });
  }),

  http.post("/api/announcements/:categoryId", async ({ request, params }) => {
    const body = (await request.json()) as any;
    const category = announcementMockData.find(
      (c) => c.id === Number(params.categoryId)
    );
    if (!category) {
      return HttpResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }
    const newAnnouncement = {
      ...body,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    category.announcements.push(newAnnouncement);
    return HttpResponse.json(newAnnouncement, { status: 201 });
  }),

  http.put(
    "/api/announcements/:categoryId/:announcementId",
    async ({ request, params }) => {
      const category = announcementMockData.find(
        (c) => c.id === Number(params.categoryId)
      );
      if (!category) {
        return HttpResponse.json(
          { message: "Category not found" },
          { status: 404 }
        );
      }
      const idx = category.announcements.findIndex(
        (a) => a.id === Number(params.announcementId)
      );
      if (idx === -1) {
        return HttpResponse.json(
          { message: "Announcement not found" },
          { status: 404 }
        );
      }
      const updated = await request.json();
      const updatedAnnouncement = {
        ...category.announcements[idx],
        ...(typeof updated === "object" && updated !== null ? updated : {}),
        updatedAt: new Date().toISOString(),
      };
      category.announcements[idx] = updatedAnnouncement;
      return HttpResponse.json(updatedAnnouncement);
    }
  ),

  http.delete(
    "/api/announcements/:categoryId/:announcementId",
    ({ params }) => {
      const category = announcementMockData.find(
        (c) => c.id === Number(params.categoryId)
      );
      if (!category) {
        return HttpResponse.json(
          { message: "Category not found" },
          { status: 404 }
        );
      }
      const index = category.announcements.findIndex(
        (a) => a.id === Number(params.announcementId)
      );
      if (index === -1) {
        return HttpResponse.json(
          { message: "Announcement not found" },
          { status: 404 }
        );
      }
      category.announcements.splice(index, 1);
      return HttpResponse.json({ message: "Deleted" });
    }
  ),
] as const;
