import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ResetPassword } from '../routes/Routes';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/.forgot-password");
    }
  }, [])
  
  return (
    <div>
        <ResetPassword />
    </div>
  )
}

export default LoginPage;