import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const sendCode = async (userData) => {
  try {
    const response = await axios.get(`${API_URL}/send-code`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending code:", error);
    throw error;
  }
};

export const verifyCode = async (verificationData) => {
  try {
    const response = await axios.post(
      `${API_URL}/verify-code`,
      verificationData
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying code:", error);
    throw error;
  }
};
