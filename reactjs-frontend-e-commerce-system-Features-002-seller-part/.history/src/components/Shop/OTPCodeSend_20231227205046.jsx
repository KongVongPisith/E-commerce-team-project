// OTPCodeSend.js
import axios from "axios";
import { toast } from "react-toastify";

const OTPCodeSend = async ({ email }) => {
  try {
    return await axios.post(`${server}/send-otp`, { email });
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};

export default OTPCodeSend;
