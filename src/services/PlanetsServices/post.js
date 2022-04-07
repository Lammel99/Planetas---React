import api from "../api";

export const postPlanet = (
  name,
  description,
  surfaceArea,
  day,
  sunDistance,
  gravity,
  image
) => {
  try {
    return api.post("/planetas", {
      name: name,
      image: image,
      description: description,
      surfaceArea: surfaceArea,
      day: day,
      sunDistance: sunDistance,
      gravity: gravity,
      card_image: image,
      color: "red",
    });
  } catch (error) {
    Response.reject(error);
  }
};
