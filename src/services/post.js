import api from "./api";

export const postPlanet = (
  name,
  image,
  description,
  surfaceArea,
  day,
  sunDistance,
  gravity
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
      card_image: "Netuno.png",
      color: "red",
    });
  } catch (error) {
    Response.reject(error);
  }
};
