import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000/api" })

export const login = (data: { email: string; password: string }) => API.post("/auth/login", data);
export const register = (data: { name: string; email: string; password: string }) => API.post("/auth/register", data);
export const fetchTasks = () => API.get("/tasks");
export const addTask = (data: { title: string; status: string; userId: string }) => API.post("/tasks", data);
