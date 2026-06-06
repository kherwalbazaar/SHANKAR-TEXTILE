'use client'

import { Eye, Trash2, TrendingUp } from 'lucide-react'
import { dummyData } from '@/lib/dummy-data'
import { useState } from 'react'

export function SalesPage() {
  const [sales, setSales] = useState(dummyData.recentSales)

  const totalSales = sales.reduce((sum, sale) => {
    const amount = parseInt(sale.amount.replace('₹', '').replace(',', ''))
    return sum + amount
  }, 0)

  const handleDeleteSale = (id: number) => {
    setSales(sales.filter((s) => s.id !== id))
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Sales</h1>
        <p className="text-slate-600 mt-1">Track and manage your sales transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Total Sales</p>
          <p className="text-3xl font-bold text-slate-900">₹{totalSales.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-2">{sales.length} transactions</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Average Order Value</p>
          <p className="text-3xl font-bold text-slate-900">₹{Math.round(totalSales / sales.length).toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-2">Per transaction</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 mb-2">Growth</p>
            <p className="text-3xl font-bold text-green-600">+12.5%</p>
          </div>
          <TrendingUp className="text-green-600" size={40} />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">All Sales</h3>
          <p className="text-sm text-slate-500">Complete sales history</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Invoice No.</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Customer</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Items</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Time</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">{sale.invoiceNo}</td>
                  <td className="py-3 px-4 text-slate-600">{sale.customer}</td>
                  <td className="py-3 px-4 text-center text-slate-600">{sale.items}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{sale.amount}</td>
                  <td className="py-3 px-4 text-slate-500">{sale.time}</td>
                  <td className="py-3 px-4 text-center flex items-center justify-center gap-2">
                    <button className="p-1.5 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteSale(sale.id)}
                      className="p-1.5 hover:bg-red-100 rounded-lg text-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
