import { getDataId } from "./alloapi.js";

const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

async function afficher() {
  try {
    let film = await getDataId(id);
    const section = document.querySelector("section");
    const article = document.createElement("article");
    const name = document.createElement("h2");
    name.textContent = film.Title;
    const affiche = document.createElement("img");
    affiche.src = film.Poster;
    affiche.alt = `Affiche de ${film.Title}`;
    const resumer = document.createElement("p");
    resumer.textContent = `Résumer : ${film.Plot}`;
    const genre = document.createElement("p");
    genre.textContent = `Genre : ${film.Genre}`;
    const acteur = document.createElement("p");
    acteur.textContent = `Acteurs : ${film.Actors}`;
    const dateFr = document.createElement("p");
    const date = new Date(film.Released);
    dateFr.textContent = `Date de sortie du film : ${date.toLocaleDateString("fr-FR")}`;
    const liste = document.createElement("ul");
    const note = document.createElement("h3");
    note.textContent = "Note du film :";
    film.Ratings.forEach((note) => {
      const li = document.createElement("li");
      li.textContent = `${note.Source} : ${note.Value}`;
      liste.appendChild(li);
    });

    section.appendChild(article);
    article.appendChild(name);
    article.appendChild(affiche);
    article.appendChild(resumer);
    article.appendChild(dateFr);
    article.appendChild(genre);
    article.appendChild(acteur);
    article.appendChild(note);
    article.appendChild(liste);
  } catch (error) {
    console.error(error);
  }
}

afficher();
