'use client'

import { Plus, Eye, Trash2 } from 'lucide-react'
import { dummyData } from '@/lib/dummy-data'
import { useState } from 'react'

export function PurchasesPage() {
  const [purchases, setPurchases] = useState(dummyData.recentPurchases)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newPurchase, setNewPurchase] = useState({
    poNo: '',
    supplier: '',
    amount: '',
    date: '',
    items: 0,
  })

  const totalPurchases = purchases.reduce((sum, p) => {
    const amount = parseInt(p.amount.replace('₹', '').replace(',', ''))
    return sum + amount
  }, 0)

  const handleAddPurchase = () => {
    if (newPurchase.poNo && newPurchase.supplier) {
      setPurchases([
        ...purchases,
        {
          id: purchases.length + 1,
          ...newPurchase,
        },
      ])
      setNewPurchase({ poNo: '', supplier: '', amount: '', date: '', items: 0 })
      setShowAddModal(false)
    }
  }

  const handleDeletePurchase = (id: number) => {
    setPurchases(purchases.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Purchases</h1>
          <p className="text-slate-600 mt-1">Manage purchase orders and suppliers</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
        >
          <Plus size={20} />
          New Purchase Order
        </button>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">New Purchase Order</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="PO Number"
                value={newPurchase.poNo}
                onChange={(e) => setNewPurchase({ ...newPurchase, poNo: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Supplier Name"
                value={newPurchase.supplier}
                onChange={(e) => setNewPurchase({ ...newPurchase, supplier: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Amount (e.g., ₹10,000)"
                value={newPurchase.amount}
                onChange={(e) => setNewPurchase({ ...newPurchase, amount: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="date"
                value={newPurchase.date}
                onChange={(e) => setNewPurchase({ ...newPurchase, date: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="number"
                placeholder="Number of Items"
                value={newPurchase.items}
                onChange={(e) => setNewPurchase({ ...newPurchase, items: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPurchase}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                Create PO
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Total Purchases</p>
          <p className="text-3xl font-bold text-slate-900">₹{totalPurchases.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-2">{purchases.length} orders</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-2">Average Order Value</p>
          <p className="text-3xl font-bold text-slate-900">₹{Math.round(totalPurchases / purchases.length).toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-2">Per order</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">All Purchase Orders</h3>
          <p className="text-sm text-slate-500">Complete purchase history</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-600">PO Number</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Supplier</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Items</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Date</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">{purchase.poNo}</td>
                  <td className="py-3 px-4 text-slate-600">{purchase.supplier}</td>
                  <td className="py-3 px-4 text-center text-slate-600">{purchase.items}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{purchase.amount}</td>
                  <td className="py-3 px-4 text-slate-500">{purchase.date}</td>
                  <td className="py-3 px-4 text-center flex items-center justify-center gap-2">
                    <button className="p-1.5 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleDeletePurchase(purchase.id)}
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
