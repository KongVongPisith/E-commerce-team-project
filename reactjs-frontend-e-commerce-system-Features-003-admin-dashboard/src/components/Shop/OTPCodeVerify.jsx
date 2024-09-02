// OTPCodeVerify.js
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { server } from '../../server';

const OTPCodeVerify = ({ email, otp, setOtp, handleSubmit }) => {
  const handleOtpVerification = async () => {
    try {
      const response = await axios.post(`${server}/verify-otp`, { email, otp });
      toast.success(response.data.message);
      handleSubmit();
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
