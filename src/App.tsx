import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Direct imports (no lazy)
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Recharge from "./pages/Recharge";
import Register from "./pages/Register";
import BankTransfer from "./pages/BankTransfer";
import RedeemPoints from "./pages/RedeemPoints";
import WalletTransfer from "./pages/WalletTransfer";
import BecomePartner from "./pages/BecomePartner";
import WhyUs from "./pages/WhyUs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import ContentPolicy from "./pages/ContentPolicy";
import BugBounty from "./pages/BugBounty";
import Support from "./pages/Support";
import ServiceDetail from "./pages/ServiceDetail";

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
                  {/* Public routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/recharge" element={<Recharge />} />

                  {/* Protected route */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />

                  {/* Other pages */}
                  <Route path="/bank-transfer" element={<BankTransfer />} />
                  <Route path="/redeem-points" element={<RedeemPoints />} />
                  <Route path="/wallet-transfer" element={<WalletTransfer />} />
                  <Route path="/become-partner" element={<BecomePartner />} />
                  <Route path="/why-us" element={<WhyUs />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/content-policy" element={<ContentPolicy />} />
                  <Route path="/bug-bounty" element={<BugBounty />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/services/:serviceId" element={<ServiceDetail />} />
                  
                  {/* 404 fallback */}
                  <Route
                    path="*"
                    element={<div className="p-8 text-center">404 - Page Not Found</div>}
                  />
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