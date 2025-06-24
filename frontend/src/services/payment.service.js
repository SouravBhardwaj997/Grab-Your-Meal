import axios from "axios";
import { API_BASE_URL } from "../config/api";

export const initiatePayment = async (amount, orderId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/payment/initiate`,
      {
        amount,
        orderId,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/payment/verify`,
      paymentData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
