import axiosInstance from './axios';

export const addReview = async (bookId, reviewData) => {
  const response = await axiosInstance.post(`/api/reviews/${bookId}`, reviewData);
  return response.data;
};

export const updateReview = async (reviewId, reviewData) => {
  const response = await axiosInstance.put(`/api/reviews/${reviewId}`, reviewData);
  return response.data;
};

export const deleteReview = async (reviewId) => {
  const response = await axiosInstance.delete(`/api/reviews/${reviewId}`);
  return response.data;
};

