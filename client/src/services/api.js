import axios from 'axios';

// Create API instance
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Attach token automatically if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// Auth
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

// Posts
export const createPost = (postData) => API.post('/posts', postData);
export const getPosts = () => API.get('/posts');
export const getSinglePost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedData) => API.put(`/posts/${id}`, updatedData);
export const deletePost = (id) => API.delete(`/posts/${id}`);
