export const dummyData = {
  categories: [
    { id: 1, name: 'Shirts', description: 'Casual and formal shirts', productCount: 2 },
    { id: 2, name: 'T-Shirts', description: 'Regular and graphic t-shirts', productCount: 2 },
    { id: 3, name: 'Jeans', description: 'Denim jeans in various styles', productCount: 1 },
    { id: 4, name: 'Pants', description: 'Formal and casual pants', productCount: 2 },
    { id: 5, name: 'Others', description: 'Miscellaneous items', productCount: 1 },
  ],

  products: [
    { id: 1, name: 'Cotton Shirt', category: 'Shirts', size: 'M', color: 'Blue', stock: 45, price: 299 },
    { id: 2, name: 'Denim Jeans', category: 'Jeans', size: 'L', color: 'Dark Blue', stock: 32, price: 899 },
    { id: 3, name: 'V-Neck T-Shirt', category: 'T-Shirts', size: 'S', color: 'White', stock: 78, price: 199 },
    { id: 4, name: 'Formal Pants', category: 'Pants', size: 'XL', color: 'Black', stock: 28, price: 599 },
    { id: 5, name: 'Casual T-Shirt', category: 'T-Shirts', size: 'M', color: 'Grey', stock: 92, price: 179 },
    { id: 6, name: 'Linen Shirt', category: 'Shirts', size: 'L', color: 'Beige', stock: 15, price: 349 },
    { id: 7, name: 'Polo Shirt', category: 'Shirts', size: 'M', color: 'Red', stock: 56, price: 399 },
    { id: 8, name: 'Chinos', category: 'Pants', size: 'L', color: 'Khaki', stock: 41, price: 449 },
  ],
  
  lowStockProducts: [
    { id: 1, name: 'Cotton Shirt', category: 'Shirts', size: 'M', color: 'Blue', stock: 2 },
    { id: 2, name: 'Denim Jeans', category: 'Jeans', size: 'L', color: 'Dark Blue', stock: 3 },
    { id: 3, name: 'V-Neck T-Shirt', category: 'T-Shirts', size: 'S', color: 'White', stock: 1 },
    { id: 4, name: 'Formal Pants', category: 'Pants', size: 'XL', color: 'Black', stock: 4 },
    { id: 5, name: 'Casual T-Shirt', category: 'T-Shirts', size: 'M', color: 'Grey', stock: 2 },
    { id: 6, name: 'Linen Shirt', category: 'Shirts', size: 'L', color: 'Beige', stock: 3 },
  ],

  recentSales: [
    { id: 1, invoiceNo: 'INV-001', customer: 'Raj Kumar', amount: '₹2,450', time: '2:30 PM', items: 5 },
    { id: 2, invoiceNo: 'INV-002', customer: 'Priya Singh', amount: '₹1,890', time: '1:15 PM', items: 3 },
    { id: 3, invoiceNo: 'INV-003', customer: 'Amit Patel', amount: '₹3,200', time: '11:45 AM', items: 7 },
    { id: 4, invoiceNo: 'INV-004', customer: 'Neha Sharma', amount: '₹960', time: '10:20 AM', items: 2 },
    { id: 5, invoiceNo: 'INV-005', customer: 'Vikram Singh', amount: '₹4,100', time: '9:00 AM', items: 8 },
  ],

  recentPurchases: [
    { id: 1, poNo: 'PO-001', supplier: 'Textile Co.', amount: '₹15,500', date: '2024-12-28', items: 50 },
    { id: 2, poNo: 'PO-002', supplier: 'Fabric Traders', amount: '₹12,300', date: '2024-12-27', items: 35 },
    { id: 3, poNo: 'PO-003', supplier: 'Cotton Mills Ltd', amount: '₹18,900', date: '2024-12-26', items: 60 },
    { id: 4, poNo: 'PO-004', supplier: 'Premium Fabrics', amount: '₹9,200', date: '2024-12-25', items: 25 },
  ],

  users: [
    { id: 1, name: 'Admin User', email: 'admin@shankartextile.com', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'John Doe', email: 'john@shankartextile.com', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Jane Smith', email: 'jane@shankartextile.com', role: 'Staff', status: 'Active' },
    { id: 4, name: 'Mike Johnson', email: 'mike@shankartextile.com', role: 'Staff', status: 'Inactive' },
    { id: 5, name: 'Sarah Williams', email: 'sarah@shankartextile.com', role: 'Manager', status: 'Active' },
  ],

  salesTrend: [
    { month: 'Jan', sales: 24000 },
    { month: 'Feb', sales: 32000 },
    { month: 'Mar', sales: 28500 },
    { month: 'Apr', sales: 35600 },
    { month: 'May', sales: 42100 },
    { month: 'Jun', sales: 38900 },
    { month: 'Jul', sales: 45200 },
    { month: 'Aug', sales: 41800 },
  ],

  categoryDistribution: [
    { name: 'Shirts', value: 28 },
    { name: 'T-Shirts', value: 22 },
    { name: 'Jeans', value: 25 },
    { name: 'Pants', value: 15 },
    { name: 'Others', value: 10 },
  ],
}
