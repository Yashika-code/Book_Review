import axiosInstance from './axios';

export const getAllBooks = async (page = 1, filters = {}) => {
  const params = new URLSearchParams({ page, ...filters });
  const response = await axiosInstance.get(`/api/books?${params}`);
  return response.data;
};

export const getBookById = async (id) => {
  const response = await axiosInstance.get(`/api/books/${id}`);
  return response.data;
};

export const createBook = async (bookData) => {
  const response = await axiosInstance.post('/api/books', bookData);
  return response.data;
};

export const updateBook = async (id, bookData) => {
  const response = await axiosInstance.put(`/api/books/${id}`, bookData);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axiosInstance.delete(`/api/books/${id}`);
  return response.data;
};

