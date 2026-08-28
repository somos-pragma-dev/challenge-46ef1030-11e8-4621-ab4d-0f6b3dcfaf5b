const axios = require('axios');

const validateAccountOperation = async (accountNumber) => {
  try {
    const response = await axios.post(`https://bankcore.example.com/validate`, { accountNumber });
    return response.data;
  } catch (error) {
    throw new Error('Bank core validation failed');
  }
};

module.exports = { validateAccountOperation };