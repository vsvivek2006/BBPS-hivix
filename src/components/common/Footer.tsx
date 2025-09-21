import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Lock, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HivixDigital</h3>
                <p className="text-sm text-gray-400">BBPS Authorized</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Trusted BBPS Payment & Recharge Platform — Instant, Secure, Nationwide
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-green-400">
                <Shield className="w-4 h-4 mr-1" />
                <span className="text-xs">BBPS Authorized</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Lock className="w-4 h-4 mr-1" />
                <span className="text-xs">SSL Encrypted</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Award className="w-4 h-4 mr-1" />
                <span className="text-xs">ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white text-sm">
                {t('aboutUs')}
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white text-sm">
                {t('ourServices')}
              </Link>
              <Link to="/recharge" className="block text-gray-400 hover:text-white text-sm">
                {t('rechargeAndBillPay')}
              </Link>
              <Link to="/become-partner" className="block text-gray-400 hover:text-white text-sm">
                {t('becomeAPartner')}
              </Link>
              <Link to="/why-us" className="block text-gray-400 hover:text-white text-sm">
                {t('whyUs')}
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white text-sm">
                {t('blog')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="space-y-2">
              <Link to="/services/mobile-prepaid" className="block text-gray-400 hover:text-white text-sm">
                Mobile Recharge
              </Link>
              <Link to="/services/electricity-bill" className="block text-gray-400 hover:text-white text-sm">
                Electricity Bill
              </Link>
              <Link to="/services/dth-recharge" className="block text-gray-400 hover:text-white text-sm">
                DTH Recharge
              </Link>
              <Link to="/bank-transfer" className="block text-gray-400 hover:text-white text-sm">
                {t('transferToBank')}
              </Link>
              <Link to="/wallet-transfer" className="block text-gray-400 hover:text-white text-sm">
                {t('walletTransfer')}
              </Link>
              <Link to="/redeem-points" className="block text-gray-400 hover:text-white text-sm">
                {t('redeemPaybackPoints')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p className="text-sm">+977 9707382481</p>
                  <p className="text-xs text-gray-400">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <p className="text-sm">hivixdigital@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p className="text-sm">Plot No 97, Dakshinpuri - I</p>
                  <p className="text-sm">Shrikishan, Sanganer, Jagatpura</p>
                  <p className="text-sm">Jaipur, Rajasthan 302017</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 HivixDigital. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                {t('privacyPolicy')}
              </Link>
              <Link to="/terms-conditions" className="text-sm text-gray-400 hover:text-white">
                {t('termsConditions')}
              </Link>
              <Link to="/refund-policy" className="text-sm text-gray-400 hover:text-white">
                {t('refundCancellation')}
              </Link>
              <Link to="/content-policy" className="text-sm text-gray-400 hover:text-white">
                {t('contentPolicy')}
              </Link>
              <Link to="/bug-bounty" className="text-sm text-gray-400 hover:text-white">
                {t('bugBounty')}
              </Link>
              <Link to="/support" className="text-sm text-gray-400 hover:text-white">
                {t('support')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;