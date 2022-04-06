import api from "./api";

export const postUser = (username, email, password) => {
  try {
    return api.post("/user", {
      username: username,
      email: email,
      password: password,
    });
  } catch (error) {
    Response.reject(error);
  }
};
