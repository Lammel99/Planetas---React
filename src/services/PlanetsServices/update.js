import api from "../api";

export const updatePlanet = (
  id,
  name,
  description,
  surfaceArea,
  day,
  sunDistance,
  gravity
) => {
  try {
    return api.put(`/planetas/${id}`, {
      name: name,
      image: "Netuno.png",
      description: description,
      surfaceArea: surfaceArea,
      day: day,
      sunDistance: sunDistance,
      gravity: gravity,
      card_image: "Netuno.png",
      color: "red",
    });
  } catch (error) {
    Response.reject(error);
  }
};
