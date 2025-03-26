import { FaPlus } from "react-icons/fa";
import AnnouncementBox from "../components/Announcement/AnnouncementBox";
import AnnouncementCircleChart from "../components/Announcement/AnnouncementCircleChart";
import AnnouncementCreateModal from "../components/Announcement/AnnouncementCreateModal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchAnnouncements } from "../redux/slices/announcementSlice";
import { AnnouncementCategory } from "../types/Models/Announcement";

export default function AnnouncementPage() {
  const dispatch = useAppDispatch();
  const announcementData: AnnouncementCategory[] = useAppSelector(
    (state) => state.announcement.announcementData
  );

  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);

  const categoryCounts = Array.isArray(announcementData)
    ? announcementData.map((cat) => ({
        name: cat.name,
        count: cat.announcements.length,
      }))
    : [];

  useEffect(() => {
    dispatch(fetchAnnouncements());
    console.log("announcement", announcementData);
  }, [dispatch]);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Bảng Thông báo</h2>

      <AnnouncementCircleChart categoryData={categoryCounts} />

      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold"> Thông Báo</h2>
          <button
            className="btn btn-primary flex items-center gap-2"
            onClick={() => setIsCreateOpen(true)}
          >
            <FaPlus /> Thêm Thông Báo
          </button>
          {isCreateOpen && (
            <AnnouncementCreateModal
              isOpen={isCreateOpen}
              onClose={() => setIsCreateOpen(false)}
            />
          )}
        </div>
        {Array.isArray(announcementData) && announcementData.length > 0 ? (
          announcementData.map((category) => (
            <div key={category.id} className="mb-4">
              <AnnouncementBox category={category} />
            </div>
          ))
        ) : (
          <p className="text-gray-400">Không có thông báo nào.</p>
        )}
      </div>
    </div>
  );
}
