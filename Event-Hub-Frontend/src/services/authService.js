import api from "./api";

// POST /api/auth/register
export const register = (data) => {
  return api.post("/auth/register", {
    username: data.username,
    password: data.password,
    phone: data.phone,
    email: data.email,
    role: data.role || "USER",
  });
};

// POST /api/auth/login
export const login = (data) => {
  return api.post("/auth/login", {
    username: data.username,
    password: data.password,
  });
};

// GET /api/auth/profile/{userId}
export const getUserProfile = (userId) => {
  return api.get(`/auth/profile/${userId}`);
};

// PUT /api/auth/profile/{userId}
export const updateUserProfile = (userId, data) => {
  return api.put(`/auth/profile/${userId}`, data);
};