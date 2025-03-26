import { format } from "date-fns";
import { Announcement } from "../../types/Models/Announcement";
import { JSX } from "react";
import { FaXmark } from "react-icons/fa6";

interface Props {
  announcement: Announcement;
}

function parseLinks(content: string): (string | JSX.Element)[] {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const result: (string | JSX.Element)[] = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = urlRegex.exec(content)) !== null) {
    const { index } = match;
    const url = match[0];

    // Grab text before URL
    const textBefore = content.slice(lastIndex, index);
    result.push(...handleNewLines(textBefore));

    // Push link
    result.push(
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {url}
      </a>
    );

    lastIndex = index + url.length;
  }

  // Handle trailing text after last URL
  const remainingText = content.slice(lastIndex);
  result.push(...handleNewLines(remainingText));

  return result;
}

// 👉 Helper to split on \n and insert <br />
function handleNewLines(text: string): (string | JSX.Element)[] {
  return text
    .split("\n")
    .flatMap((part, i, arr) =>
      i < arr.length - 1 ? [part, <br key={`br-${i}`} />] : [part]
    );
}

export default function AnnouncementItem({ announcement }: Props) {
  return (
    <div className="collapse collapse-arrow shadow border my-2 bg-white">
      <input type="checkbox" />
      <div className="collapse-title font-medium">{announcement.name}</div>
      <div className="collapse-content space-y-2">
        <p className="text-sm italic text-gray-500">
          Ngày:{" "}
          {announcement.createdAt
            ? format(new Date(announcement.createdAt), "dd/MM/yyyy")
            : "null"}{" "}
          — {announcement.issuer}
        </p>

        <p className="text-sm text-gray-800 leading-relaxed">
          {parseLinks(announcement.content)}
        </p>
        {announcement.expiredAt && (
          <p className="text-sm italic text-gray-500">
            Thông báo sẽ tự động xóa vào lúc: {announcement.expiredAt}.
          </p>
        )}
        <button className="btn btn-error flex items-center gap-2">
          <FaXmark /> Xóa Thông Báo
        </button>
      </div>
    </div>
  );
}
