export default function Announcement() {
  const stats = [
    { title: "Công việc", count: 0, color: "bg-red-500" },
    { title: "Sự kiện", count: 0, color: "bg-green-500" },
    { title: "Thông báo", count: 0, color: "bg-purple-500" },
    { title: "Yêu cầu", count: 0, color: "bg-cyan-500" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div key={index} className={`card ${stat.color} text-white shadow-lg`}>
          <div className="card-body items-center text-center">
            <h2 className="text-lg font-bold">{stat.title}</h2>
            <p className="text-3xl font-semibold">{stat.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
