import { AnnouncementCategory } from "../../types/Models/Announcement";
import AnnouncementItem from "./AnnouncementItem";

interface Props {
  category: AnnouncementCategory;
}

export default function AnnouncementBox({ category }: Props) {
  return (
    <div
      className={`collapse collapse-arrow shadow mb-4 border`}
      style={{ backgroundColor: category.color }}
    >
      <input type="checkbox" defaultChecked />
      <div className="collapse-title font-semibold text-lg">
        {category.name}
      </div>
      <div className="collapse-content">
        {category.announcements.length === 0 ? (
          <p className="text-gray-400 italic">Không có thông báo</p>
        ) : (
          category.announcements.map((a) => (
            <AnnouncementItem key={a.id} announcement={a} />
          ))
        )}
      </div>
    </div>
  );
}
