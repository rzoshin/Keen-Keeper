import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useChartData from "./useChartData";

const InteractionPieChart = () => {
  const data = useChartData();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        By Interaction Type
      </h2>

      <div className="flex flex-col items-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>

        {/* Custom Legend */}
        <div className="flex gap-6 mt-4 text-sm">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></span>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractionPieChart;