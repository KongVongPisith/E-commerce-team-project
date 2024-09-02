// OTPCodeSend.js
import axios from 'axios';
import { toast } from 'react-toastify';
import { server } from '../../server';

const OTPCodeSend = async ({ email, specificParam }) => {
  try {
    // Add your specific logic here
    const response = await axios.post(`${server}/send-otp`, { email, specificParam });

    // You can perform additional actions with the response if needed

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};

export default OTPCodeSend;
