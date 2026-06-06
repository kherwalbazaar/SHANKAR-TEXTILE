'use client'

import { Plus, Edit, Trash2, X } from 'lucide-react'
import { dummyData } from '@/lib/dummy-data'
import { useState } from 'react'

export function CategoriesPage() {
  const [categories, setCategories] = useState(dummyData.categories)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    productCount: 0,
  })

  const handleAddCategory = () => {
    if (newCategory.name && newCategory.description) {
      const maxId = Math.max(...categories.map((c) => c.id), 0)
      setCategories([
        ...categories,
        {
          id: maxId + 1,
          ...newCategory,
        },
      ])
      setNewCategory({ name: '', description: '', productCount: 0 })
      setShowAddModal(false)
    }
  }

  const handleOpenEdit = (category: any) => {
    setEditingCategory({ ...category })
    setShowEditModal(true)
  }

  const handleUpdateCategory = () => {
    if (editingCategory.name && editingCategory.description) {
      setCategories(categories.map((c) => (c.id === editingCategory.id ? editingCategory : c)))
      setShowEditModal(false)
      setEditingCategory(null)
    }
  }

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id))
    setShowDeleteConfirm(null)
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Categories</h1>
          <p className="text-slate-600 mt-1">Manage product categories</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
        >
          <Plus size={20} />
          Add Category
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Delete Category</h2>
            <p className="text-slate-600 mb-6">Are you sure you want to delete this category? This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteCategory(showDeleteConfirm)}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {showEditModal && editingCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Edit Category</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Category Name"
                value={editingCategory.name}
                onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Description"
                value={editingCategory.description}
                onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows={3}
              />
              <input
                type="number"
                placeholder="Product Count"
                value={editingCategory.productCount}
                onChange={(e) => setEditingCategory({ ...editingCategory, productCount: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateCategory}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                Update Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Add New Category</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Category Name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Description"
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows={3}
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
                onClick={handleAddCategory}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 shadow-sm border border-slate-200/60 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300 ease-out"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{category.description}</p>
              </div>
              <div className="flex gap-1 ml-3">
                <button
                  onClick={() => handleOpenEdit(category)}
                  className="p-2.5 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-all duration-200"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(category.id)}
                  className="p-2.5 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-all duration-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200/50">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{category.productCount}</span>
                <span className="ml-1">products in this category</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 mb-4">No categories found</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
          >
            <Plus size={20} />
            Create First Category
          </button>
        </div>
      )}
    </div>
  )
}
