import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

interface ChiliStats {
  attribute: string;
  value: number;
}

interface ChiliChartProps {
  stats: ChiliStats[];
}

export default function ChiliChart({ stats }: ChiliChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={stats}>
        <PolarGrid />
        <PolarAngleAxis dataKey="attribute" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          name="Chili Profile"
          dataKey="value"
          stroke="#ef4444"
          fill="#ef4444"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
