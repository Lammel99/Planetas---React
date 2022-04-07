import api from "../api";

export const authenticateUser = (email, password) => {
  try {
    return api.post("/auth", {
      email: email,
      password: password,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
