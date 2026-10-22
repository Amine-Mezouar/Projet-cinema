import { magie } from "./fonction.js";

const a = document.querySelector("input");
let t;
const section = document.querySelector(".info");
const bouton = document.querySelector("button");
let page = 1;
let saisie = "";

a.addEventListener("input", () => {
  clearTimeout(t);
  t = setTimeout(async () => {
    saisie = a.value.trim();
    page = 1;
    console.log(saisie);
    bouton.hidden = true;
    section.innerHTML = "";
    if (!saisie) return;
    try {
      magie(saisie, page, bouton, section);
    } catch (error) {
      console.error(error);
    }
  }, 300);
});

bouton.addEventListener("click", () => {
  page++;
  magie(saisie, page, bouton, section);
});
