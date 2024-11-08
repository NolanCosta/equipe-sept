"use strict";

var _require = require("express"),
    text = _require.text;

var questionTsunami = [{
  id: 1,
  image: "",
  text: "Tsunami."
}, {
  id: 2,
  image: "",
  question: "Une sirène d'alerte retentit dans la ville, la mer s’est subitement retirée. Que faire?",
  choices: ["Courir à la maison sur le littoral pour préparer des affaires.", "Eloignons-nous de la mer !"],
  answer: "Eloignons-nous de la mer !"
}, {
  id: 3,
  image: "",
  question: "Par quelle direction partir?",
  choices: ["Un endroit en hauteur sera plus sure !", "On est en securite ici, c’est assez loin."],
  answer: "Un endroit en hauteur sera plus sure !"
}, {
  id: 4,
  image: "",
  text: "S'éloigner le plus possible dans les montagne."
}, {
  id: 5,
  image: "",
  question: "Est-ce qu'on peut rentrer à la maison ?",
  choices: ["Rentrons vite voir si la maison est intacte.", "Attendons encore un peu, aucun signal marquant la fin n’a été donné."],
  answer: "Attendons encore un peu, aucun signal marquant la fin n’a été donné."
}, {
  id: 6,
  image: "",
  text: "La sirène de fin d'alerte retentit, allons constater les dégâts avec prudence."
}];
module.exports = questionTsunami;