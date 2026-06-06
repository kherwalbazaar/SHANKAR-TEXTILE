'use client'

const recentPurchases = [
  { purchaseId: 'PO-001', supplier: 'Textile Mills Ltd.', amount: '₹45,000', date: '2024-12-05' },
  { purchaseId: 'PO-002', supplier: 'Premium Fabrics Inc.', amount: '₹32,500', date: '2024-12-04' },
  { purchaseId: 'PO-003', supplier: 'Cotton Traders', amount: '₹28,900', date: '2024-12-03' },
  { purchaseId: 'PO-004', supplier: 'Global Textile Co.', amount: '₹56,200', date: '2024-12-02' },
]

export function RecentPurchasesTable() {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50/50 rounded-xl p-6 shadow-sm border border-slate-200/60">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Recent Purchases</h3>
        <p className="text-sm text-slate-500 mt-1">Latest purchase orders</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200/60">
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Purchase ID</th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Supplier</th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Amount</th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentPurchases.map((purchase, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-100/80 hover:bg-slate-50/60 transition-colors duration-200"
              >
                <td className="py-4 px-4">
                  <span className="font-medium text-slate-900">{purchase.purchaseId}</span>
                </td>
                <td className="py-4 px-4 text-slate-600">{purchase.supplier}</td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-slate-900">{purchase.amount}</span>
                </td>
                <td className="py-4 px-4 text-slate-500">{purchase.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
