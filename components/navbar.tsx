'use client'

import {
  Search,
  Bell,
  ChevronDown,
  User,
  Menu,
} from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  onSidebarToggle?: () => void
}

export function Navbar({ onSidebarToggle }: NavbarProps) {
  const [notificationCount] = useState(3)

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const handleMenuClick = () => {
    onSidebarToggle?.()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 z-40">
      {/* Left Section - Logo and Menu */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}
        <button
          onClick={handleMenuClick}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors md:hidden"
          aria-label="Toggle sidebar"
          type="button"
        >
          <Menu size={24} className="text-slate-600" />
        </button>

        {/* Brand Text */}
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-slate-900">SHANKAR TEXTILE</h1>
          <p className="text-xs text-slate-500">Inventory Dashboard</p>
        </div>
      </div>

      {/* Search Bar - Hidden on Small Screens */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search products, customers..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Date - Hidden on Small Screens */}
        <span className="text-sm text-slate-500 hidden md:block">{today}</span>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell size={20} className="text-slate-600" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 md:gap-3 pl-4 md:pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900">Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm md:text-base">
            A
          </div>
          <button className="p-1 hover:bg-slate-100 rounded transition-colors hidden sm:block" aria-label="User menu">
            <ChevronDown size={18} className="text-slate-600" />
          </button>
        </div>
      </div>
    </nav>
  )
}
