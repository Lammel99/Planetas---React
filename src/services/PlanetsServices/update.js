import { Image } from "@mui/icons-material";
import api from "../api";

export const updatePlanet = (
  id,
  name,
  description,
  surfaceArea,
  day,
  sunDistance,
  gravity,
  image
) => {
  try {
    return api.put(`/planetas/${id}`, {
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
