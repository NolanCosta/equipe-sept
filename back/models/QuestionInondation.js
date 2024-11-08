const { text } = require("express");

const questions = [
  {
    id: 1,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065629942321203/story-inon1.webp?ex=672e0942&is=672cb7c2&hm=79f03e67d7bb42a535cb5b85129270432cd8a9c1103af68df17bc9b0ff44e651&=&format=webp&width=538&height=538",
    text: "Inondations.",
  },
  {
    id: 2,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065630487445515/story-inon2.webp?ex=672e0942&is=672cb7c2&hm=643ff5af96c59c1ba48e49b90d8481e7f302f2cfcaaece4b4da532f2bfc2ad4d&=&format=webp&width=538&height=538",
    question: "Une alerte est donnée sur la radio, que faire?",
    choices: ["Prévenir ses parents ?", "Continuer de dessiner ?"],
    answer: "Prévenir ses parents ?",
  },
  {
    id: 3,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065630948823111/story-inon3.webp?ex=672e0942&is=672cb7c2&hm=3cd44a11ad96e838f956973d79045dafc2c92b42137e63386cb7a71dfb8d8753&=&format=webp&width=538&height=538",
    question:
      "Votre enfant vous avertit d’une alerte inondation donnée à la radio, que faites-vous ?",
    choices: [
      "continuer de faire ce que l'on fait",
      "Vérifier l'information, se préparer. On ne sait jamais.",
    ],
    answer: "Vérifier l'information, se préparer. On ne sait jamais.",
  },
  {
    id: 4,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065631464718347/story-inon4.webp?ex=672e0942&is=672cb7c2&hm=41af7bfec563b927f71d6283b81bf933546b5c08d771270e173256c57d04ef67&=&format=webp&width=538&height=538",
    question: "Quoi mettre dans son sac d’evacuation ?",
    choices: [
      "Nourriture/eau, lampe à pile, vêtement chaud, etc...",
      "GameBoy, skateboard, trousse d'école, ect ...",
    ],
    answer: "Nourriture/eau, lampe à pile, vêtement chaud, etc...",
  },
  {
    id: 5,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065632043663400/story-inon5.webp?ex=672e0943&is=672cb7c3&hm=c148e31af3fdeb3878c7b17f9d598c8f94077049b9dd1293545c119b2a8ebdb4&=&format=webp&width=538&height=538",
    text: "Attendre pour information via divers moyens de communication : radio, télé, téléphone, etc...",
  },
  {
    id: 6,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065632618418230/story-inon6.webp?ex=672eb203&is=672d6083&hm=b0dc88dbf6cad5a355d9ae1483426d2b3839cd0237dce472ec5c85ace98b949a&=&format=webp&width=681&height=681",
    question:
      "On commence à s’ennuyer ici et si nous allions récupérer des jeux dans le garage?",
    choices: ["Allons-y!", "Non surtout pas jouons au cartes."],
    answer: "Non surtout pas jouons au cartes.",
  },
  {
    id: 7,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065633192902707/story-inon7.webp?ex=672eb203&is=672d6083&hm=37892f6883c5748203510775e2c71d3914dc23160024179f423a869356ddc76e&=&format=webp&width=681&height=681",
    question:
      "Le temps passe vite en s’amusant, cependant on peut peut-etre partir maintenant?",
    choices: [
      "Non surtout pas il faut attendre la fin de l’alerte ou les secours!",
      "Oui, on peut sortir maintenant.",
    ],
    answer:
      "Non surtout pas il faut attendre la fin de l’alerte ou les secours!",
  },
  {
    id: 8,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065633704742975/story-inon8.webp?ex=672eb203&is=672d6083&hm=2e5495d582d2eb119508de275bbde4c91718c78bcd9f10aab4b71dcd7d25286a&=&format=webp&width=681&height=681",
    text: "La fin de la tempête, la météo se calme.",
  },
  {
    id: 9,
    image:
      "https://media.discordapp.net/attachments/1303701971294883866/1304065634740736071/story-inon9v2.webp?ex=672eb203&is=672d6083&hm=90feaf0c423e1a2350d76e9afbfc9c3d965c4266b9fc25c6cc5c976447a546b5&=&format=webp&width=681&height=681",
    text: "Les pompiers s’assurent que nous allons bien.",
  },
];

module.exports = questions;
