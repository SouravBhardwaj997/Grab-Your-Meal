import axios from "axios";

export const initiatePayment = async (amount, orderId) => {
  try {
    const response = await axios.post("/api/payment/initiate", {
      amount,
      orderId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post("/api/payment/verify", paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
