const { text } = require("express");

const questionSeisme = [
  {
    id: 1,
    image:"../back/assets/story-seisme1.webp",
    text: "Séisme.",
  },
  {
    id: 2,
    image:"../back/assets/story-seisme2.webp",
    question: "Soudain, des secousses renverse tout ses crayons, vite que faire!?",
    choices: ["Je me réfugie sur le balcon.", "Je me met sous une table ou dans un coin de ma chambre."],
    answer: "Je me met sous une table ou dans un coin de ma chambre.",
  },
  {
    id: 3,
    image:"../back/assets/seisme3.webp",
    question: "Les secousses se calment que dois-je faire?",
    choices: ["Je regardes par la fenetre pour voir la situations.", "Je termines mon dessin!"],
    answer: "Je regardes par la fenetre pour voir la situations.",
  },
  {
    id: 4,
    image:"../back/assets/seisme4.webp",
    question: "Tout la ville est sans dessus dessous!",
    choices: ["Je vais prévenir mes parents, il faut se préparer!", "Mon dessin!!!"],
    answer: "Je vais prévenir mes parents, il faut se préparer!",
  },
  {
    id: 5,
    image:"../back/assets/eisme5.webp",
    question: "Avec tes parents tu prépares un sac d’évacuations que mettre dedans?",
    choices: ["Nourriture/Eau, vêtements chauds et lampe à pile.", "Jouets, Skateboard et trousse d’école"],
    answer: "Nourriture/Eau, vêtements chauds et lampe à pile.",
  },
  {
    id: 6,
    image:"../back/assets/story-seisme6.webp",
    text: "Ton père pense à couper l’électricté et le gaz de la maison pour la sécuriser.",
  },
  {
    id: 7,
    image:"../back/assets/story-seisme7.webp",
    question: "Il te reste de la place dans le sac avant de partir tu prends ?",
    choices: ["La gameboy.", "La radio."],
    answer: "La radio.",
  },
  {
    id: 8,
    image:"../back/assets/story-seisme8.webp",
    question: "En partant vous hésitez entre prendre les escalier ou l’ascenseur, vous prennez?",
    choices: ["L’escalier.", "L’ascenseur."],
    answer: "L’escalier.",
  },
  {
    id: 9,
    image:"../back/assets/story-seisme9.webp",
    question: "Maintenant que vous etes dehors où allez-vous?",
    choices: ["Aller vers la mer.", "De se diriger vers les montagnes."],
    answer: "De se diriger vers les terres",
  },

];

module.exports = questionSeisme;