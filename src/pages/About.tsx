import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const certificates = [
    { name: 'BBPS Authorized', icon: Shield, color: 'text-green-600' },
    { name: 'ISO 27001 Certified', icon: Award, color: 'text-blue-600' },
    { name: 'SSL Encrypted', icon: CheckCircle, color: 'text-purple-600' },
    { name: 'RBI Compliant', icon: Shield, color: 'text-red-600' }
  ];

  const stats = [
    { number: '10M+', label: 'Transactions Processed', icon: Users },
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '24/7', label: 'Customer Support', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">HivixDigital</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Trusted BBPS Payment & Recharge Platform
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  HivixDigital is a leading BBPS (Bharat Bill Payment System) authorized payment platform 
                  that has been revolutionizing the digital payment landscape in India since our inception. 
                  We provide comprehensive financial services including mobile recharges, utility bill payments, 
                  money transfers, and digital wallet solutions.
                </p>
                <p>
                  Our platform serves millions of customers across India, offering secure, instant, and 
                  reliable payment services through our extensive network of retailers and distributors. 
                  We are committed to financial inclusion and making digital payments accessible to every 
                  corner of the country.
                </p>
                <p>
                  With state-of-the-art technology, bank-grade security, and 24/7 customer support, 
                  HivixDigital has become the trusted choice for individuals, businesses, and partners 
                  looking for seamless payment solutions. Our ISO 27001 certification and RBI compliance 
                  ensure that every transaction is secure and reliable.
                </p>
                <p>
                  We believe in empowering our partners with the tools and support they need to grow their 
                  business while providing exceptional service to their customers. Our comprehensive 
                  training programs, competitive commission structures, and dedicated support team make 
                  us the preferred partner for thousands of retailers and distributors nationwide.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  Our Commitment
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  To provide secure, instant, and reliable payment services that empower individuals 
                  and businesses across India to transact with confidence.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  Our Promise
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Every transaction is backed by our guarantee of security, transparency, and 
                  exceptional customer service, ensuring peace of mind for all our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To democratize digital payments in India by providing secure, accessible, and 
                affordable financial services to every citizen, regardless of their location or 
                economic background.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To become India's most trusted and comprehensive digital payment platform, 
                enabling financial inclusion and empowering millions of Indians to participate 
                in the digital economy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trust, transparency, innovation, and customer-centricity form the foundation of 
                everything we do. We are committed to ethical business practices and social 
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted by millions across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted and certified by leading authorities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
                <cert.icon className={`w-12 h-12 ${cert.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become a partner and start earning with India's most trusted payment platform
          </p>
          <Link
            to="/become-partner"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('becomeAPartner')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;