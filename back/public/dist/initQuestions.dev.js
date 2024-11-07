"use strict";

var mongoose = require('mongoose');

var Question = require('./models/Question');

mongoose.connect('mongodb://localhost:27017/QuizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connected to MongoDB");
})["catch"](function (err) {
  console.error("Could not connect to MongoDB", err);
});
var questions = [{
  imageUrl: "https://media.discordapp.net/attachments/1303701971294883866/1304016986447024148/Tsunami1.jpeg?ex=672ddbf5&is=672c8a75&hm=d1f295c958c886a2fdbc97135ff27fc39e4b67950e080b1abf207c488a9aaeae&=&format=webp&width=538&height=538",
  questionText: "Que faire lors d'un tsunami",
  choices: [{
    text: "Prendre une photo",
    isCorrect: false
  }, {
    text: "Aller dans un leux spécialisé pour se protéger",
    isCorrect: true
  }]
}, {
  imageUrl: "https://media.discordapp.net/attachments/1303701971294883866/1304016987420102759/tsunami3.jpeg?ex=672ddbf5&is=672c8a75&hm=840920334fa2490e1282d943a64f1da838bf1a89e71bc8f4c7284b5e1d8009d6&=&format=webp&width=538&height=538",
  questionText: "Que fait face au vague?",
  choices: [{
    text: "Rester a l'habrie se mettre en hauteur",
    isCorrect: true
  }, {
    text: "Aller regarder la télé",
    isCorrect: false
  }]
}];

var insertQuestions = function insertQuestions() {
  return regeneratorRuntime.async(function insertQuestions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Question.insertMany(questions));

        case 3:
          console.log("Questions inserted successfully");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Error inserting questions:", _context.t0);

        case 9:
          _context.prev = 9;
          mongoose.connection.close();
          return _context.finish(9);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6, 9, 12]]);
};

insertQuestions();