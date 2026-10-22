const url = "https://www.omdbapi.com/";
import { apiSecret } from "./jesuislapi.js";

export async function getDataNom(nomFilm, page = 1, annee = "") {
  try {
    let data = await fetch(
      `${url}?s='${nomFilm}'&page=${page}&y=${annee}&apikey=${apiSecret}`,
    );
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getDataId(idFilm) {
  try {
    let data = await fetch(`${url}?i=${idFilm}&apikey=${apiSecret}`);
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}
