const { text } = require("express");

const questions = [
    {
        id: 1,
        image: "https://media.discordapp.net/attachments/1303701971294883866/1304065629942321203/story-inon1.webp?ex=672e0942&is=672cb7c2&hm=79f03e67d7bb42a535cb5b85129270432cd8a9c1103af68df17bc9b0ff44e651&=&format=webp&width=538&height=538",
        text: "Inondations"
    },
    {
        id: 2,
        image: "https://media.discordapp.net/attachments/1303701971294883866/1304065630487445515/story-inon2.webp?ex=672e0942&is=672cb7c2&hm=643ff5af96c59c1ba48e49b90d8481e7f302f2cfcaaece4b4da532f2bfc2ad4d&=&format=webp&width=538&height=538",
        question: "Une alerte est donnée sur la radio, que faire?",
        choices: ["Prévenir ses parents ?", "Continuer de dessiner ?"],
        answer: "Prevenir ses parents ?"
    },
];



module.exports = questions;
