// Dummy API services for development
export const api = {
  fetchBill: async (consumerNumber: string, serviceId: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      status: 'success',
      data: {
        consumerNumber,
        billerName: 'Rajasthan Electricity Board',
        amount: Math.floor(Math.random() * 5000) + 500,
        dueDate: '2024-02-15',
        consumerName: 'John Doe',
        billDate: '2024-01-15'
      }
    };
  },

  payBill: async (billData: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const txnId = `HVDX${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 100000).toString().padStart(6, '0')}`;
    
    return {
      status: 'success',
      data: {
        transactionId: txnId,
        amount: billData.amount,
        timestamp: new Date().toISOString(),
        receipt: {
          billerName: billData.billerName,
          consumerNumber: billData.consumerNumber,
          amount: billData.amount,
          transactionId: txnId
        }
      }
    };
  },

  transferToBank: async (transferData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const txnId = `HVDX${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 100000).toString().padStart(6, '0')}`;
    
    return {
      status: 'success',
      data: {
        transactionId: txnId,
        amount: transferData.amount,
        beneficiaryName: transferData.beneficiaryName,
        accountNumber: transferData.accountNumber,
        timestamp: new Date().toISOString()
      }
    };
  },

  redeemPoints: async (points: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const walletAmount = Math.floor(points / 10); // 100 points = ₹10
    
    return {
      status: 'success',
      data: {
        pointsRedeemed: points,
        walletAmountAdded: walletAmount,
        newWalletBalance: 5000 + walletAmount // Mock balance update
      }
    };
  },

  submitContactForm: async (formData: any) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const ticketId = `HVD-TCK-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    
    return {
      status: 'success',
      data: {
        ticketId,
        message: 'Your query has been submitted successfully. Our team will contact you within 24 hours.'
      }
    };
  },

  submitPartnerForm: async (formData: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      status: 'success',
      data: {
        applicationId: `HVD-APP-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        message: 'Your application has been received. KYC verification is pending. We will contact you within 2-3 business days.'
      }
    };
  }
};