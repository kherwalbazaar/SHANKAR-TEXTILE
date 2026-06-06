'use client'

import { Package, Zap, AlertCircle, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'
import { StatCard } from './stat-card'
import { SalesChart } from './sales-chart'
import { CategoryChart } from './category-chart'
import { RecentSalesTable } from './recent-sales-table'
import { LowStockTable } from './low-stock-table'
import { RecentPurchasesTable } from './recent-purchases-table'
import { ProductsPage } from './pages/products-page'
import { CategoriesPage } from './pages/categories-page'
import { StockPage } from './pages/stock-page'
import { PurchasesPage } from './pages/purchases-page'
import { SalesPage } from './pages/sales-page'
import { ReportsPage } from './pages/reports-page'
import { UsersPage } from './pages/users-page'
import { SettingsPage } from './pages/settings-page'

export function Dashboard() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar 
        activeItem={activePage} 
        onNavigate={setActivePage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <Navbar onSidebarToggle={handleSidebarToggle} />

      {/* Main Content */}
      <main className="md:ml-[280px] mt-16 p-4 md:p-8 transition-all duration-300">
        {activePage === 'Dashboard' && (
          <>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600 mt-1">Welcome back, Admin!</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Products"
                value="250"
                subtitle="In inventory"
                icon={Package}
                iconBgColor="bg-purple-100"
                iconColor="text-purple-600"
              />
              <StatCard
                title="Total Stock"
                value="1,250"
                subtitle="Units available"
                icon={Zap}
                iconBgColor="bg-blue-100"
                iconColor="text-blue-600"
              />
              <StatCard
                title="Low Stock Items"
                value="12"
                subtitle="Need restocking"
                icon={AlertCircle}
                iconBgColor="bg-orange-100"
                iconColor="text-orange-600"
              />
              <StatCard
                title="Today's Sales"
                value="₹8,500"
                subtitle="9 transactions"
                icon={TrendingUp}
                iconBgColor="bg-green-100"
                iconColor="text-green-600"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div className="lg:col-span-1">
                <CategoryChart />
              </div>
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <RecentSalesTable />
              <RecentPurchasesTable />
            </div>

            {/* Low Stock Table */}
            <div className="mb-8">
              <LowStockTable />
            </div>
          </>
        )}

        {activePage === 'Products' && <ProductsPage />}
        {activePage === 'Categories' && <CategoriesPage />}
        {activePage === 'Stock' && <StockPage />}
        {activePage === 'Purchases' && <PurchasesPage />}
        {activePage === 'Sales' && <SalesPage />}
        {activePage === 'Reports' && <ReportsPage />}
        {activePage === 'Users' && <UsersPage />}
        {activePage === 'Settings' && <SettingsPage />}

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 py-6 border-t border-slate-200">
          <p>© 2026 SHANKAR TEXTILE. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
