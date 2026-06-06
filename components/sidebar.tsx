'use client'

import {
  LayoutDashboard,
  Package,
  Zap,
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Settings,
  Users,
  Layers,
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Package, label: 'Products' },
  { icon: Layers, label: 'Categories' },
  { icon: Zap, label: 'Stock' },
  { icon: ShoppingCart, label: 'Purchases' },
  { icon: TrendingUp, label: 'Sales' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
  { icon: Users, label: 'Users' },
]

interface SidebarProps {
  activeItem: string
  onNavigate: (item: string) => void
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ activeItem, onNavigate, isOpen, onClose }: SidebarProps) {

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside className={`fixed left-0 top-0 h-screen w-[280px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
            <img src="/apple-icon.png" alt="SHANKAR logo" className="h-full w-full object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-lg">SHANKAR</h1>
            <p className="text-xs text-slate-400">TEXTILE</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-3">Stock Management System</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label

          return (
            <button
              key={item.label}
              onClick={() => {
                onNavigate(item.label);
                onClose?.();
              }}
              className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30'
                  : 'hover:bg-slate-700/50 text-slate-300'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <p className="text-xs text-slate-400 text-center">
          © 2026 SHANKAR TEXTILE
        </p>
      </div>
    </aside>
    </>
  )
}
