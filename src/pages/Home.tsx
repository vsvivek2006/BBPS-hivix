import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Award, Star, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blog';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    t('heroTagline1'),
    t('heroTagline2'),
    t('heroTagline3')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const features = [
    {
      icon: Shield,
      title: 'BBPS Authorized',
      description: 'Government certified payment platform ensuring maximum security'
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Round the clock service for all your payment needs'
    },
    {
      icon: Users,
      title: 'Nationwide Network',
      description: 'Extensive network covering all states and territories'
    },
    {
      icon: Award,
      title: 'Instant Processing',
      description: 'Lightning fast transactions with immediate confirmation'
    }
  ];

  const benefits = [
    {
      title: 'Secure Payments',
      description: 'Bank-grade security with SSL encryption and fraud protection',
      icon: Shield
    },
    {
      title: 'Instant Refunds',
      description: 'Failed transactions are refunded within 2-3 business days',
      icon: Clock
    },
    {
      title: 'Multiple Payment Options',
      description: 'Credit card, debit card, net banking, UPI, and wallet support',
      icon: Award
    },
    {
      title: 'Reward Points',
      description: 'Earn points on every transaction and redeem for cash rewards',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-400">HivixDigital</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p 
                key={currentTagline} 
                className="text-xl md:text-2xl mb-8 animate-fade-in"
              >
                {taglines[currentTagline]}
              </p>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Trusted BBPS Payment & Recharge Platform — Instant, Secure, Nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recharge"
                className="inline-flex items-center px-8 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                {t('rechargeNow')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                {t('payABill')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About HivixDigital
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8">
            HivixDigital is a BBPS (Bharat Bill Payment System) authorized payment platform that provides 
            secure, instant, and reliable payment services across India. We offer comprehensive solutions 
            for mobile recharges, bill payments, money transfers, and digital wallet services with 
            unmatched security and convenience.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Read More <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose HivixDigital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience the best-in-class features that make HivixDigital your trusted payment partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                <benefit.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stay updated with the latest fintech trends and payment insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Digital Payment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust HivixDigital for their payment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/become-partner"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('becomeAPartner')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;