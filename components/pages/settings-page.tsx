'use client'

import { Save, Bell, Lock, Eye } from 'lucide-react'
import { useState } from 'react'

export function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: 'SHANKAR TEXTILE',
    companyEmail: 'admin@shankartextile.com',
    phone: '+91 9999 999 999',
    address: 'Mumbai, India',
    lowStockThreshold: '10',
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: true,
    autoBackup: true,
  })

  const [isSaved, setIsSaved] = useState(false)

  const handleChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value })
    setIsSaved(false)
  }

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your application settings and preferences</p>
      </div>

      {isSaved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
          ✓ Settings saved successfully!
        </div>
      )}

      <div className="space-y-6">
        {/* Company Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Company Information</h3>
            <p className="text-sm text-slate-500">Update your business details</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Company Name</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  value={settings.companyEmail}
                  onChange={(e) => handleChange('companyEmail', e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Address</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Inventory Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Inventory Settings</h3>
            <p className="text-sm text-slate-500">Configure inventory management parameters</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Low Stock Threshold</label>
            <input
              type="number"
              value={settings.lowStockThreshold}
              onChange={(e) => handleChange('lowStockThreshold', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-slate-500 mt-2">Items below this quantity will be marked as low stock</p>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Bell size={20} className="text-purple-600" />
              Notifications
            </h3>
            <p className="text-sm text-slate-500">Manage notification preferences</p>
          </div>

          <div className="space-y-4">
            <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                className="w-4 h-4 text-purple-600 rounded"
              />
              <div className="ml-3">
                <p className="font-semibold text-slate-900">Email Notifications</p>
                <p className="text-sm text-slate-500">Receive alerts via email</p>
              </div>
            </label>

            <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.pushNotifications}
                onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                className="w-4 h-4 text-purple-600 rounded"
              />
              <div className="ml-3">
                <p className="font-semibold text-slate-900">Push Notifications</p>
                <p className="text-sm text-slate-500">Get instant push notifications</p>
              </div>
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock size={20} className="text-purple-600" />
              Security
            </h3>
            <p className="text-sm text-slate-500">Enhance your account security</p>
          </div>

          <div className="space-y-4">
            <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                className="w-4 h-4 text-purple-600 rounded"
              />
              <div className="ml-3">
                <p className="font-semibold text-slate-900">Two-Factor Authentication</p>
                <p className="text-sm text-slate-500">Require 2FA for login</p>
              </div>
            </label>

            <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) => handleChange('autoBackup', e.target.checked)}
                className="w-4 h-4 text-purple-600 rounded"
              />
              <div className="ml-3">
                <p className="font-semibold text-slate-900">Automatic Backups</p>
                <p className="text-sm text-slate-500">Enable daily data backups</p>
              </div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold"
          >
            <Save size={20} />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}
