// OTPCodeVerify.js
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { server } from '../../server';

const OTPCodeVerify = ({ email, otp, setOtp, handleSubmit, specificVerifyParam }) => {
  const handleOtpVerification = async () => {
    try {
      // Add your specific verification logic here
      const response = await axios.post(`${server}/verify-otp`, { email, otp, specificVerifyParam });

      // You can perform additional actions with the response if needed

      toast.success(response.data.message);
      handleSubmit(); // Call the parent component's submit function
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Step 2: Verify OTP</h2>
      <label>OTP:</label>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleOtpVerification}>Verify OTP</button>
    </div>
  );
};

export default OTPCodeVerify;
