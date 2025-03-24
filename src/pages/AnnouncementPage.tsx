import AnnouncementBox from "../components/Announcement/AnnouncementBox";
import AnnouncementCircleChart from "../components/Announcement/AnnouncementCircleChart";
import { AnnouncementCategory } from "../components/Types/Models/Announcement";
import { announcementMockData } from "../data/announcementData";

export default function AnnouncementPage() {
  const announcementData: AnnouncementCategory[] = announcementMockData;

  const categoryCounts = announcementData.map((cat) => ({
    name: cat.name,
    count: cat.announcements.length,
  }));

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Thông kê Thông báo</h2>

      <AnnouncementCircleChart categoryData={categoryCounts} />

      {/* List of Announcements (optional) */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-2">Chi tiết</h3>
        {announcementData.map((category) => (
          <div key={category.id} className="mb-4">
            <AnnouncementBox category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
