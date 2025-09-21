export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'retailer' | 'distributor';
  walletBalance: number;
  kycStatus: 'pending' | 'approved' | 'rejected';
}

export interface Transaction {
  id: string;
  type: 'recharge' | 'bill_payment' | 'transfer' | 'redeem';
  amount: number;
  status: 'success' | 'pending' | 'failed';
  date: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}