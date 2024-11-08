"use strict";

var _require = require("express"),
    text = _require.text;

var questionSeisme = [{
  id: 1,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081074510626918/story-seisme1.webp?ex=672ec064&is=672d6ee4&hm=5d1a83229eb584a2d06458dabf5902fe0cb39d8c01490420bb060e99e5d425c7&=&format=webp&width=590&height=590",
  text: "Séisme."
}, {
  id: 2,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081075181719695/story-seisme2.webp?ex=672ec064&is=672d6ee4&hm=9b41d40bd7af8da6aa9c6bd251f8d06b0d4011cfbce80c9b9ddb50ab6e6e854e&=&format=webp&width=590&height=590",
  question: "Soudain, des secousses renverse tout ses crayons, vite que faire!?",
  choices: ["Je me réfugie sur le balcon.", "Je me met sous une table ou dans un coin de ma chambre."],
  answer: "Je me met sous une table ou dans un coin de ma chambre."
}, {
  id: 3,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081075919913052/story-seisme3.webp?ex=672ec065&is=672d6ee5&hm=b82e495b8736d7c0115496f4dbb34e0acf2569cb5b8762e63fc0b65f76514e32&=&format=webp&width=590&height=590",
  question: "Les secousses se calment que dois-je faire?",
  choices: ["Je regardes par la fenetre pour voir la situations.", "Je termines mon dessin!"],
  answer: "Je regardes par la fenetre pour voir la situations."
}, {
  id: 4,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081076838207488/story-seisme4.webp?ex=672ec065&is=672d6ee5&hm=3603a6200731fa6a1fe2748e5c2834c9c1884d2e84897682735d95e830864d3e&=&format=webp&width=590&height=590",
  question: "Tout la ville est sans dessus dessous!",
  choices: ["Je vais prévenir mes parents, il faut se préparer!", "Mon dessin!!!"],
  answer: "Je vais prévenir mes parents, il faut se préparer!"
}, {
  id: 5,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081077530398772/story-seisme5.webp?ex=672ec065&is=672d6ee5&hm=056fdfa5a31c869187343984e825bf01afd59deae5f645e3e7a5801446d578fb&=&format=webp&width=590&height=590",
  question: "Avec tes parents tu prépares un sac d’évacuations que mettre dedans?",
  choices: ["Nourriture/Eau, vêtements chauds et lampe à pile.", "Jouets, Skateboard et trousse d’école"],
  answer: "Nourriture/Eau, vêtements chauds et lampe à pile."
}, {
  id: 6,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081078251814974/story-seisme6.webp?ex=672ec065&is=672d6ee5&hm=c113fa59782224ff6d9f896d6ba4e6605e168526ce490c3d3305381c1b788123&=&format=webp&width=590&height=590",
  text: "Ton père pense à couper l’électricté et le gaz de la maison pour la sécuriser."
}, {
  id: 7,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081296871653397/story-seisme7.webp?ex=672ec099&is=672d6f19&hm=997a2fd539d97c3c4fc3870b0c0db7380a8f5e87d1890731c5c06de57abc0839&=&format=webp&width=590&height=590",
  question: "Il te reste de la place dans le sac avant de partir tu prends ?",
  choices: ["La gameboy.", "La radio."],
  answer: "La radio."
}, {
  id: 8,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081079660974121/story-seisme8.webp?ex=672ec066&is=672d6ee6&hm=9c07563ccd88597703734e5e280be7819c7007a65ee97bf8471136165a92e560&=&format=webp&width=590&height=590",
  question: "En partant vous hésitez entre prendre les escalier ou l’ascenseur, vous prennez?",
  choices: ["L’escalier.", "L’ascenseur."],
  answer: "L’escalier."
}, {
  id: 9,
  image: "https://media.discordapp.net/attachments/1303701971294883866/1304081080327864390/story-seisme9.webp?ex=672ec066&is=672d6ee6&hm=3590fcc1d2ec4f4776e21cb1bb48dac806601abfb250d52a51e44b4f3ad14964&=&format=webp&width=590&height=590",
  question: "Maintenant que vous etes dehors où allez-vous?",
  choices: ["Aller vers la mer.", "De se diriger vers les montagnes."],
  answer: "De se diriger vers les montagnes."
}];
module.exports = questionSeisme;