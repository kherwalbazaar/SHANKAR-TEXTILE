'use client'

import { Plus, AlertCircle } from 'lucide-react'
import { dummyData } from '@/lib/dummy-data'
import { useState } from 'react'

export function StockPage() {
  const [stocks, setStocks] = useState(dummyData.lowStockProducts)
  const [showAddStockModal, setShowAddStockModal] = useState<number | null>(null)
  const [quantity, setQuantity] = useState(0)

  const handleAddStock = (id: number) => {
    setStocks(stocks.map((p) => (p.id === id ? { ...p, stock: p.stock + quantity } : p)))
    setShowAddStockModal(null)
    setQuantity(0)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Stock Management</h1>
        <p className="text-slate-600 mt-1">Monitor and manage low stock items</p>
      </div>

      {showAddStockModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Add Stock</h2>
            <p className="text-slate-600 mb-4">
              {stocks.find((s) => s.id === showAddStockModal)?.name}
            </p>
            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddStockModal(null)}
                className="flex-1 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddStock(showAddStockModal)}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                Add Stock
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">Low Stock Products</h3>
          <p className="text-sm text-slate-500">Items running low on inventory</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Product Name</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Size</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Color</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Stock Qty</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Status</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((product) => (
                <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">{product.name}</td>
                  <td className="py-3 px-4 text-slate-600">{product.category}</td>
                  <td className="py-3 px-4 text-slate-600">{product.size}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border border-slate-300"
                        style={{
                          backgroundColor:
                            product.color === 'Blue'
                              ? '#3b82f6'
                              : product.color === 'Dark Blue'
                                ? '#1e40af'
                                : product.color === 'White'
                                  ? '#f5f5f5'
                                  : product.color === 'Black'
                                    ? '#000'
                                    : product.color === 'Grey'
                                      ? '#9ca3af'
                                      : '#d4a574',
                        }}
                      />
                      <span className="text-slate-600">{product.color}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          product.stock <= 1
                            ? '#dc2626'
                            : product.stock <= 2
                              ? '#f59e0b'
                              : '#22c55e',
                      }}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                      <AlertCircle size={14} />
                      Critical
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => setShowAddStockModal(product.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg transition-colors text-xs font-medium"
                    >
                      <Plus size={16} />
                      Add Stock
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
