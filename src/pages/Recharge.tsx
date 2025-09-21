import React, { useState } from 'react';
import { Smartphone, Tv, Zap, Wifi, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { api } from '../services/api';

const Recharge: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState('mobile-prepaid');
  const [formData, setFormData] = useState({
    mobileNumber: '',
    operator: '',
    circle: '',
    amount: '',
    consumerNumber: '',
    serviceProvider: ''
  });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Plans, 3: Confirmation, 4: Success
  const [plans, setPlans] = useState<any[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [transactionResult, setTransactionResult] = useState<any>(null);

  const services = [
    { id: 'mobile-prepaid', name: 'Mobile Prepaid', icon: Smartphone, color: 'bg-blue-600' },
    { id: 'mobile-postpaid', name: 'Mobile Postpaid', icon: Smartphone, color: 'bg-green-600' },
    { id: 'dth-recharge', name: 'DTH Recharge', icon: Tv, color: 'bg-purple-600' },
    { id: 'electricity-bill', name: 'Electricity Bill', icon: Zap, color: 'bg-yellow-600' },
    { id: 'broadband-bill', name: 'Broadband Bill', icon: Wifi, color: 'bg-red-600' }
  ];

  const operators = {
    'mobile-prepaid': ['Airtel', 'Jio', 'Vi (Vodafone Idea)', 'BSNL'],
    'mobile-postpaid': ['Airtel', 'Jio', 'Vi (Vodafone Idea)', 'BSNL'],
    'dth-recharge': ['Tata Sky', 'Dish TV', 'Airtel Digital TV', 'Sun Direct', 'D2H'],
    'electricity-bill': ['BESCOM', 'MSEDCL', 'TNEB', 'UPPCL', 'PSPCL'],
    'broadband-bill': ['Airtel Xstream', 'Jio Fiber', 'BSNL Broadband', 'Hathway']
  };

  const circles = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Rajasthan', 'UP East', 'UP West', 'Gujarat', 'Maharashtra'];

  const dummyPlans = [
    { id: 1, amount: 199, validity: '28 days', data: '1.5GB/day', description: 'Unlimited calls + SMS' },
    { id: 2, amount: 299, validity: '28 days', data: '2GB/day', description: 'Unlimited calls + SMS + Disney+ Hotstar' },
    { id: 3, amount: 449, validity: '56 days', data: '2GB/day', description: 'Unlimited calls + SMS + OTT benefits' },
    { id: 4, amount: 599, validity: '84 days', data: '1.5GB/day', description: 'Unlimited calls + SMS + Long validity' },
    { id: 5, amount: 999, validity: '84 days', data: '2.5GB/day', description: 'Unlimited calls + SMS + Premium OTT' }
  ];

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData({ ...formData, operator: '', serviceProvider: '' });
    setStep(1);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (selectedService === 'mobile-prepaid' || selectedService === 'mobile-postpaid') {
        // Show plans for mobile services
        setPlans(dummyPlans);
        setStep(2);
      } else {
        // For bill payments, fetch bill details
        const response = await api.fetchBill(formData.consumerNumber, selectedService);
        if (response.status === 'success') {
          setSelectedPlan(response.data);
          setStep(3);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setFormData({ ...formData, amount: plan.amount.toString() });
    setStep(3);
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const paymentData = {
        serviceId: selectedService,
        amount: selectedPlan.amount || formData.amount,
        mobileNumber: formData.mobileNumber,
        consumerNumber: formData.consumerNumber,
        operator: formData.operator || formData.serviceProvider,
        billerName: selectedPlan.billerName
      };

      const response = await api.payBill(paymentData);
      if (response.status === 'success') {
        setTransactionResult(response.data);
        setStep(4);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      mobileNumber: '',
      operator: '',
      circle: '',
      amount: '',
      consumerNumber: '',
      serviceProvider: ''
    });
    setSelectedPlan(null);
    setTransactionResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('rechargeAndBillPay')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Quick and secure recharge & bill payment services
          </p>
        </div>

        {/* Service Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Select Service
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedService === service.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                }`}
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Enter Details
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {(selectedService === 'mobile-prepaid' || selectedService === 'mobile-postpaid') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Operator
                      </label>
                      <select
                        required
                        value={formData.operator}
                        onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select Operator</option>
                        {operators[selectedService as keyof typeof operators]?.map((op) => (
                          <option key={op} value={op}>{op}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Circle
                      </label>
                      <select
                        required
                        value={formData.circle}
                        onChange={(e) => setFormData({ ...formData, circle: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select Circle</option>
                        {circles.map((circle) => (
                          <option key={circle} value={circle}>{circle}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {selectedService !== 'mobile-prepaid' && selectedService !== 'mobile-postpaid' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Consumer Number / Account ID
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.consumerNumber}
                      onChange={(e) => setFormData({ ...formData, consumerNumber: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter consumer number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Provider
                    </label>
                    <select
                      required
                      value={formData.serviceProvider}
                      onChange={(e) => setFormData({ ...formData, serviceProvider: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select Provider</option>
                      {operators[selectedService as keyof typeof operators]?.map((provider) => (
                        <option key={provider} value={provider}>{provider}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  'Processing...'
                ) : selectedService === 'mobile-prepaid' || selectedService === 'mobile-postpaid' ? (
                  <>
                    View Plans
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                ) : (
                  <>
                    Fetch Bill
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Plans Selection */}
        {step === 2 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Select Plan for {formData.mobileNumber}
              </h2>
              <button
                onClick={() => setStep(1)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan)}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      ₹{plan.amount}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Validity: {plan.validity}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {plan.data}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {plan.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Confirm Payment
              </h2>
              <button
                onClick={() => setStep(selectedService === 'mobile-prepaid' || selectedService === 'mobile-postpaid' ? 2 : 1)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back
              </button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Payment Details</h3>
              <div className="space-y-2 text-sm">
                {selectedService === 'mobile-prepaid' || selectedService === 'mobile-postpaid' ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Mobile Number:</span>
                      <span className="font-medium">{formData.mobileNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Operator:</span>
                      <span className="font-medium">{formData.operator}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Plan:</span>
                      <span className="font-medium">{selectedPlan?.description}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Consumer Number:</span>
                      <span className="font-medium">{formData.consumerNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Biller:</span>
                      <span className="font-medium">{selectedPlan?.billerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Consumer Name:</span>
                      <span className="font-medium">{selectedPlan?.consumerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                      <span className="font-medium">{selectedPlan?.dueDate}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Amount:</span>
                  <span className="text-blue-600">₹{selectedPlan?.amount || formData.amount}</span>
                </div>
              </div>
            </div>

            {!isAuthenticated && (
              <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Please <a href="/login" className="font-medium underline">login</a> to complete the payment.
                </p>
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={loading || !isAuthenticated}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                'Processing Payment...'
              ) : (
                <>
                  Pay ₹{selectedPlan?.amount || formData.amount}
                  <CreditCard className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && transactionResult && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your transaction has been completed successfully.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Transaction ID:</span>
                  <span className="font-mono font-medium">{transactionResult.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                  <span className="font-medium">₹{transactionResult.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Date & Time:</span>
                  <span className="font-medium">
                    {new Date(transactionResult.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Download Receipt
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Share via WhatsApp
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                New Transaction
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recharge;