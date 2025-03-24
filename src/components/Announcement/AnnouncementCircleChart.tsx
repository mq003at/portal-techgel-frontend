import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  categoryData: { name: string; count: number }[];
}

export default function AnnouncementCircleChart({ categoryData }: Props) {
  const total = categoryData.reduce((sum, c) => sum + c.count, 0);

  const chartData = useMemo(() => {
    return {
      labels: categoryData.map((c) => c.name),
      datasets: [
        {
          data: categoryData.map((c) => c.count),
          backgroundColor: [
            "blue", "red", "#34d399", "#facc15", "#a78bfa", "#fb923c",
          ],
          borderWidth: 2,
        },
      ],
    };
  }, [categoryData]);

  const options: ChartOptions<"doughnut"> = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="relative w-72 h-72 mx-auto">
      <Doughnut data={chartData} options={options} />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <p className="text-2xl font-bold">{total}</p>
        <p className="text-gray-500 text-sm">Thông báo</p>
      </div>
    </div>
  );
}
