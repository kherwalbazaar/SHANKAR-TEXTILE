'use client'

import { DownloadCloud, Filter } from 'lucide-react'
import { SalesChart } from '@/components/sales-chart'
import { CategoryChart } from '@/components/category-chart'

export function ReportsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
          <p className="text-slate-600 mt-1">View detailed sales and inventory analytics</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium">
            <Filter size={20} />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium">
            <DownloadCloud size={20} />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="lg:col-span-1">
          <CategoryChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Monthly Revenue</p>
          <p className="text-3xl font-bold text-slate-900">₹3,24,000</p>
          <p className="text-xs text-green-600 font-semibold mt-2">↑ 15% from last month</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Total Orders</p>
          <p className="text-3xl font-bold text-slate-900">234</p>
          <p className="text-xs text-slate-500 mt-2">This month</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Avg Order Value</p>
          <p className="text-3xl font-bold text-slate-900">₹1,385</p>
          <p className="text-xs text-slate-500 mt-2">Per transaction</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Conversion Rate</p>
          <p className="text-3xl font-bold text-slate-900">3.2%</p>
          <p className="text-xs text-slate-500 mt-2">This period</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Sales by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: 'Shirts', value: 45, color: 'bg-purple-500' },
            { name: 'T-Shirts', value: 32, color: 'bg-blue-500' },
            { name: 'Jeans', value: 28, color: 'bg-pink-500' },
            { name: 'Pants', value: 22, color: 'bg-green-500' },
            { name: 'Others', value: 18, color: 'bg-orange-500' },
          ].map((cat, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-lg">
              <p className="text-sm text-slate-600 mb-2">{cat.name}</p>
              <p className="text-2xl font-bold text-slate-900">{cat.value}</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                <div className={`${cat.color} h-2 rounded-full`} style={{ width: `${cat.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
