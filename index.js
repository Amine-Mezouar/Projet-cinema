import { getDataId } from "./alloapi.js";
import { magie } from "./fonction.js";

const id = ["tt0245844", "tt17526714", "tt15239678", "tt3896198"];
const bouton = document.querySelector("button");

let saisie = "war";
let page = 0;
const section = document.querySelector(".recommendation");

async function afficher(idFilm) {
  try {
    let film = await getDataId(idFilm);
    console.log(film.imdbID);
    const article = document.createElement("article");
    const name = document.createElement("h2");
    name.textContent = film.Title;
    const affiche = document.createElement("img");
    affiche.src = film.Poster;
    affiche.alt = `Affiche de ${film.Title}`;
    const resumer = document.createElement("p");
    resumer.textContent = film.Plot;
    const lien = document.createElement("a");
    lien.href = `movie.html?id=${film.imdbID}`;
    lien.textContent = "En savoir plus";
    section.appendChild(article);
    article.appendChild(name);
    article.appendChild(affiche);
    article.appendChild(resumer);
    article.appendChild(lien);
  } catch (error) {
    console.error(error);
  }
}

id.forEach(afficher);

bouton.addEventListener("click", () => {
  page++;
  magie(saisie, page, bouton, section, "2024");
});
