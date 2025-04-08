const categories = [
  { title: "Công việc", count: 0, color: "bg-red-500" },
  { title: "Sự kiện", count: 0, color: "bg-green-500" },
  { title: "Thông báo", count: 0, color: "bg-violet-500" },
  { title: "Yêu cầu", count: 0, color: "bg-cyan-500" },
];

export default function GeneralPage() {
  console.log("general");
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`rounded-lg shadow-md text-white text-center py-4 cursor-pointer hover:opacity-90 transition ${category.color}`}
        >
          <div className="text-sm font-semibold">{category.title}</div>
          <div className="text-2xl font-bold">{category.count}</div>
        </div>
      ))}
    </div>
  );
}
