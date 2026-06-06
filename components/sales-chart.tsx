'use client'

import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChevronDown } from 'lucide-react'

const data = [
  { month: 'Jan', sales: 45000 },
  { month: 'Feb', sales: 52000 },
  { month: 'Mar', sales: 48000 },
  { month: 'Apr', sales: 61000 },
  { month: 'May', sales: 55000 },
  { month: 'Jun', sales: 67000 },
  { month: 'Jul', sales: 72000 },
  { month: 'Aug', sales: 68000 },
  { month: 'Sep', sales: 78000 },
  { month: 'Oct', sales: 85000 },
  { month: 'Nov', sales: 92000 },
  { month: 'Dec', sales: 98000 },
]

export function SalesChart() {
  const [period, setPeriod] = useState('Monthly')

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Sales Overview</h3>
          <p className="text-sm text-slate-500">Monthly sales trend</p>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700">
            {period}
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
            formatter={(value) => `₹${value.toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#7c3aed"
            strokeWidth={3}
            dot={{ fill: '#7c3aed', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
