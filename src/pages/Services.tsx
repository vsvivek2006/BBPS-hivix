import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
    return IconComponent || Icons.CreditCard;
  };

  const categories = [
    { name: 'Mobile', services: services.filter(s => s.category === 'Mobile') },
    { name: 'Utility', services: services.filter(s => s.category === 'Utility') },
    { name: 'DTH', services: services.filter(s => s.category === 'DTH') },
    { name: 'Internet', services: services.filter(s => s.category === 'Internet') },
    { name: 'Finance', services: services.filter(s => s.category === 'Finance') },
    { name: 'Transport', services: services.filter(s => s.category === 'Transport') },
    { name: 'Entertainment', services: services.filter(s => s.category === 'Entertainment') },
    { name: 'Gas', services: services.filter(s => s.category === 'Gas') },
    { name: 'Insurance', services: services.filter(s => s.category === 'Insurance') }
  ].filter(category => category.services.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('ourServices')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Complete BBPS Payment Solutions for All Your Needs
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              From mobile recharges to utility bill payments, we offer comprehensive 
              digital payment services with instant processing and maximum security.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className={categoryIndex > 0 ? 'mt-16' : ''}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.name} Services
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service) => {
                  const IconComponent = getIcon(service.icon);
                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-10 h-10 text-blue-600" />
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience the best-in-class payment services with unmatched benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Instant Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All transactions are processed instantly with immediate confirmation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                100% Secure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bank-grade security with SSL encryption and fraud protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                24/7 Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Round-the-clock service availability for all your payment needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cashback & Rewards
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn cashback and reward points on every transaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the convenience of digital payments with HivixDigital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recharge"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('rechargeNow')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;