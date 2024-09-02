import React from 'react';
import { useNavigate } from 'react-router-dom';
import OTPCodeSend from '../components/Shop/OTPCodeSend';
import OTPCodeVerify from '../components/Shop/OTPCodeVerify';

const OTPCodePage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <OTPCodeSend />
        <OTPCodeVerify />
    </div>
  )
}

export default OTPCodePage;