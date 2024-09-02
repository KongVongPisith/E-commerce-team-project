import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/userActions";
import { server } from "../../server";

const OTPVerify = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleVerify = () => {
    // Perform OTP verification logic
    axios
      .post(`${server}/verify-otp`, { email, otp })
      .then((res) => {
        // Assuming the backend returns a token upon successful OTP verification
        const token = res.data.token;

        // Dispatch the login action
        dispatch(login({ email, token }));

        // Redirect to the user's profile or dashboard
        history.push("/profile");
      })
      .catch((error) => {
        // Handle OTP verification failure
        setError("Invalid OTP. Please try again.");
        console.error(error);
      });
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <p>Please enter the OTP sent to your email.</p>
      <label>OTP:</label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
};

export default OTPVerify;
