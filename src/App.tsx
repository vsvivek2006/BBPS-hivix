import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import ProtectedRoute from './components/common/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
import Recharge from './pages/Recharge';
import Register from './pages/Register';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/recharge" element={<Recharge />} />
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  {/* Temporary placeholder routes */}
                  <Route path="/bank-transfer" element={<div className="p-8 text-center">Bank Transfer page coming soon...</div>} />
                  <Route path="/redeem-points" element={<div className="p-8 text-center">Redeem Points page coming soon...</div>} />
                  <Route path="/wallet-transfer" element={<div className="p-8 text-center">Wallet Transfer page coming soon...</div>} />
                  <Route path="/become-partner" element={<div className="p-8 text-center">Become Partner page coming soon...</div>} />
                  <Route path="/why-us" element={<div className="p-8 text-center">Why Us page coming soon...</div>} />
                  <Route path="/blog" element={<div className="p-8 text-center">Blog page coming soon...</div>} />
                  <Route path="/contact" element={<div className="p-8 text-center">Contact page coming soon...</div>} />
                  <Route path="/privacy-policy" element={<div className="p-8 text-center">Privacy Policy page coming soon...</div>} />
                  <Route path="/terms-conditions" element={<div className="p-8 text-center">Terms & Conditions page coming soon...</div>} />
                  <Route path="/refund-policy" element={<div className="p-8 text-center">Refund Policy page coming soon...</div>} />
                  <Route path="/content-policy" element={<div className="p-8 text-center">Content Policy page coming soon...</div>} />
                  <Route path="/bug-bounty" element={<div className="p-8 text-center">Bug Bounty page coming soon...</div>} />
                  <Route path="/support" element={<div className="p-8 text-center">Support page coming soon...</div>} />
                  <Route path="/services/:serviceId" element={<div className="p-8 text-center">Service detail page coming soon...</div>} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppFloat />
            </div>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;