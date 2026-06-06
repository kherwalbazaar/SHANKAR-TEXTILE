'use client'

const recentSales = [
  { invoiceNo: 'INV-001', customer: 'Raj Kumar', amount: '₹2,450', time: '2:30 PM' },
  { invoiceNo: 'INV-002', customer: 'Priya Singh', amount: '₹1,890', time: '1:15 PM' },
  { invoiceNo: 'INV-003', customer: 'Amit Patel', amount: '₹3,200', time: '11:45 AM' },
  { invoiceNo: 'INV-004', customer: 'Neha Sharma', amount: '₹960', time: '10:20 AM' },
]

export function RecentSalesTable() {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50/50 rounded-xl p-6 shadow-sm border border-slate-200/60">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Recent Sales</h3>
        <p className="text-sm text-slate-500 mt-1">Latest transactions</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200/60">
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Invoice No.</th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Customer</th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Amount</th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentSales.map((sale, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-100/80 hover:bg-slate-50/60 transition-colors duration-200"
              >
                <td className="py-4 px-4">
                  <span className="font-medium text-slate-900">{sale.invoiceNo}</span>
                </td>
                <td className="py-4 px-4 text-slate-600">{sale.customer}</td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-slate-900">{sale.amount}</span>
                </td>
                <td className="py-4 px-4 text-slate-500">{sale.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
