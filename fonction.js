import { getDataNom } from "./alloapi.js";

export async function magie(saisie, page, bouton, section, annee) {
  try {
    let data = await getDataNom(saisie, page, annee);
    bouton.hidden = false;
    if (data.Response === "False") {
      bouton.hidden = true;
      section.textContent = "Aucun film trouvé";
      return;
    }

    data.Search.forEach((film) => {
      console.log(film.imdbID);
      const article = document.createElement("article");
      const name = document.createElement("h2");
      name.textContent = film.Title;
      const affiche = document.createElement("img");
      affiche.src = film.Poster;
      affiche.alt = `Affiche de ${film.Title}`;
      const lien = document.createElement("a");
      lien.href = `movie.html?id=${film.imdbID}`;
      lien.textContent = "En savoir plus";
      section.appendChild(article);
      article.appendChild(name);
      article.appendChild(affiche);
      article.appendChild(lien);
    });
  } catch (error) {
    console.error(error);
  }
}
