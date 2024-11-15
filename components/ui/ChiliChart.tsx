import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface ChiliStats {
  attribute: string;
  value: number;
}

interface ChiliChartProps {
  stats: ChiliStats[];
}

export default function ChiliChart({ stats }: ChiliChartProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={stats}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="attribute"
            tick={{ fill: "#666", fontSize: 14 }}
          />
          <Radar
            name="Chili Profile"
            dataKey="value"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
