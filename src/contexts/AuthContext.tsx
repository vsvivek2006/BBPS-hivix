import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: string) => Promise<boolean>;
  loginWithOTP: (phone: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: string = 'user'): Promise<boolean> => {
    // Dummy login - in real app, this would call API
    if (email && password) {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        phone: '+977 9707382481',
        role: role as any,
        walletBalance: 5000,
        kycStatus: 'approved'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const loginWithOTP = async (phone: string): Promise<boolean> => {
    if (phone) {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'user@example.com',
        phone,
        role: 'user',
        walletBalance: 5000,
        kycStatus: 'approved'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = async (userData: any): Promise<boolean> => {
    // Dummy registration
    if (userData.email && userData.password) {
      const mockUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        role: userData.role || 'user',
        walletBalance: 0,
        kycStatus: 'pending'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      loginWithOTP,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};