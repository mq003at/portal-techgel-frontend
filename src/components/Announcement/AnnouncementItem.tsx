import { format } from "date-fns";
import { Announcement } from "../Types/Models/Announcement";

interface Props {
  announcement: Announcement;
}

function parseLinks(content: string) {
  const urlRegex = /((https?:\/\/[^\s]+))/g;
  return content.split(urlRegex).map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default function AnnouncementItem({ announcement }: Props) {
  return (
    <div className="collapse collapse-arrow bg-base-100 shadow border mb-2">
      <input type="checkbox" />
      <div className="collapse-title font-medium">{announcement.name}</div>
      <div className="collapse-content space-y-2">
        <p className="text-sm italic text-gray-500">
          CreatedAt:{" "}
          {announcement.createdAt
            ? format(new Date(announcement.createdAt), "dd-MM-yyyy")
            : "null"}{" "}
          — {announcement.issuer}
        </p>

        <p className="text-sm text-gray-800 leading-relaxed">
          {parseLinks(announcement.content)}
        </p>
      </div>
    </div>
  );
}
