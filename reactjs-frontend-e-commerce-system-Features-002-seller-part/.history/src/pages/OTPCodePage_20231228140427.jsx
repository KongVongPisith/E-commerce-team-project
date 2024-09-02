// pages/OTPCodePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPCodePage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Add logic to verify OTP
    // If OTP is valid, navigate to the next page
    navigate('/dashboard'); // Replace with the actual route you want to navigate to
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <p>Please enter the OTP sent to your email.</p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default OTPCodePage;
