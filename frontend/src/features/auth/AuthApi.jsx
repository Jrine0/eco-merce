// src/features/auth/AuthApi.js
import { axiosi } from '../../config/axios';

// Remove quotes if they exist in the environment variable
const BASE_URL = process.env.REACT_APP_BASE_URL ? 
  process.env.REACT_APP_BASE_URL.replace(/"/g, '') : 
  '';

export const signup = async (cred) => {
  try {
    const res = await axiosi.post(`${BASE_URL}/auth/signup`, cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (cred) => {
  try {
    const res = await axiosi.post(`${BASE_URL}/auth/login`, cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyOtp = async (cred) => {
  try {
    const res = await axiosi.post(`${BASE_URL}/auth/verify-otp`, cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const resendOtp = async (cred) => {
  try {
    const res = await axiosi.post(`${BASE_URL}/auth/resend-otp`, cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const forgotPassword = async (cred) => {
  try {
    const res = await axiosi.post(`${BASE_URL}/auth/forgot-password`, cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const resetPassword = async (cred) => {
  try {
    const res = await axiosi.post(`${BASE_URL}/auth/reset-password`, cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const checkAuth = async () => {
  try {
    const res = await axiosi.get(`${BASE_URL}/auth/check-auth`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const res = await axiosi.get(`${BASE_URL}/auth/logout`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};