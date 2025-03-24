import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  categoryData: { name: string; count: number }[];
}

export default function AnnouncementCircleChart({ categoryData }: Props) {
  const total = categoryData.reduce((sum, c) => sum + c.count, 0);

  const chartData: ChartData<"doughnut", number[], string> = {
    labels: categoryData.map((c) => c.name),
    datasets: [
      {
        data: categoryData.map((c) => c.count),
        backgroundColor: [
          "#60a5fa", "#f87171", "#34d399", "#facc15", "#a78bfa", "#fb923c",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "75%",
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 14,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const label = ctx.label || "";
            const value = ctx.raw || 0;
            return `${label}: ${value} thông báo`;
          },
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Smaller chart */}
      <div className="relative w-44 h-44">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex items-center justify-center mr-[85px]">
          <p className="text-xl font-bold">{total}</p>
        </div>
      </div>
    </div>
  );
}
