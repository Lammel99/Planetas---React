import api from "../api"

export const getPlanets = () => {
  try {
    return api.request("/planetas");
  } catch (error) {
    Response.reject(error);
  }
};
