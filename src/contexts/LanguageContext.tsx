import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    aboutUs: 'About Us',
    ourServices: 'Our Services',
    rechargeAndBillPay: 'Recharge & Bill Pay',
    transferToBank: 'Transfer To Bank',
    redeemPaybackPoints: 'Redeem Payback Points',
    walletTransfer: 'Wallet Transfer',
    becomeAPartner: 'Become a Partner',
    whyUs: 'Why Us',
    blog: 'Blog',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    
    // Hero Section
    heroTagline1: 'Recharge Instantly',
    heroTagline2: 'Pay Bills Seamlessly',
    heroTagline3: 'Secure Transfers Nationwide',
    rechargeNow: 'Recharge Now',
    payABill: 'Pay a Bill',
    
    // Common
    submit: 'Submit',
    cancel: 'Cancel',
    continue: 'Continue',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    amount: 'Amount',
    mobileNumber: 'Mobile Number',
    email: 'Email',
    password: 'Password',
    name: 'Name',
    address: 'Address',
    
    // Footer
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    refundCancellation: 'Refund & Cancellation',
    contentPolicy: 'Content Policy',
    bugBounty: 'Bug Bounty',
    support: 'Support',
    
    // Dashboard
    dashboard: 'Dashboard',
    walletBalance: 'Wallet Balance',
    recentTransactions: 'Recent Transactions',
    quickActions: 'Quick Actions',
    logout: 'Logout'
  },
  hi: {
    // Navigation
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    ourServices: 'हमारी सेवाएं',
    rechargeAndBillPay: 'रीचार्ज और बिल भुगतान',
    transferToBank: 'बैंक में ट्रांसफर',
    redeemPaybackPoints: 'पेबैक पॉइंट्स रिडीम करें',
    walletTransfer: 'वॉलेट ट्रांसफर',
    becomeAPartner: 'पार्टनर बनें',
    whyUs: 'हमें क्यों चुनें',
    blog: 'ब्लॉग',
    contact: 'संपर्क',
    login: 'लॉगिन',
    register: 'रजिस्टर',
    
    // Hero Section
    heroTagline1: 'तुरंत रीचार्ज करें',
    heroTagline2: 'बिल का आसान भुगतान',
    heroTagline3: 'देशव्यापी सुरक्षित ट्रांसफर',
    rechargeNow: 'अभी रीचार्ज करें',
    payABill: 'बिल का भुगतान करें',
    
    // Common
    submit: 'जमा करें',
    cancel: 'रद्द करें',
    continue: 'जारी रखें',
    confirm: 'पुष्टि करें',
    back: 'वापस',
    next: 'अगला',
    amount: 'राशि',
    mobileNumber: 'मोबाइल नंबर',
    email: 'ईमेल',
    password: 'पासवर्ड',
    name: 'नाम',
    address: 'पता',
    
    // Footer
    privacyPolicy: 'गोपनीयता नीति',
    termsConditions: 'नियम और शर्तें',
    refundCancellation: 'रिफंड और रद्दीकरण',
    contentPolicy: 'सामग्री नीति',
    bugBounty: 'बग बाउंटी',
    support: 'सहायता',
    
    // Dashboard
    dashboard: 'डैशबोर्ड',
    walletBalance: 'वॉलेट बैलेंस',
    recentTransactions: 'हाल के लेनदेन',
    quickActions: 'त्वरित कार्य',
    logout: 'लॉगआउट'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};