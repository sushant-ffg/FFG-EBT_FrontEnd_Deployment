import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  type?: 'bar' | 'line';
  data?: any[];
  dataKeyX?: string;
  dataKeyY?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  type = 'bar',
  data = [],
  dataKeyX = 'month',
  dataKeyY = 'count',
}) => {
  // fallback to mock data if no data available
  const mockData = [
    { [dataKeyX]: 'Jan', [dataKeyY]: 400 },
    { [dataKeyX]: 'Feb', [dataKeyY]: 300 },
    { [dataKeyX]: 'Mar', [dataKeyY]: 600 },
    { [dataKeyX]: 'Apr', [dataKeyY]: 800 },
    { [dataKeyX]: 'May', [dataKeyY]: 500 },
    { [dataKeyX]: 'Jun', [dataKeyY]: 900 },
  ];

  const chartData = data && data.length > 0 ? data : mockData;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeyX} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={dataKeyY} fill="#466EE5" />
            </BarChart>
          ) : (
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeyX} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKeyY}
                stroke="#466EE5"
                strokeWidth={2}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
