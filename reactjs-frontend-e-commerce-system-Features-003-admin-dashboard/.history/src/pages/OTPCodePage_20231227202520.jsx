// OTPCodePage.jsx
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "../../server";

const OTPCodePage = ({ email }) => {
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}/verify-otp`, { email, otp });
      toast.success(response.data.message);
      history.push("/login"); // Redirect to login after successful OTP verification
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          OTP Verification
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleVerify}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="otp"
                  autoComplete="one-time-code"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPCodePage;