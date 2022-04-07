import api from "../api"

export const deletePlanet = (id) => {
  try {
    return api.delete(`/planetas/${id}`);
  } catch (error) {
    return Response.reject(error);
  }
};
