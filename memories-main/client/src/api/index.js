import axios from "axios";

const API=axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
  
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
return req});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
// gets data from database
export const signIn=(formdata)=>API.post('/user/signin',formdata);
export const signUp=(formdata)=>API.post('/user/signup',formdata);