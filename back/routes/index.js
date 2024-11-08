const express = require("express");
const router = express.Router();

const questions = require("../models/QuestionInondation");
const questionseisme = require("../models/QuestionSeisme");
const questiontsunami = require("../models/QuestionTsunami");

router.get("/api/inondation", (req, res) => {
  res.json(questions);
});

router.get("/api/inondation/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const question = questions.find((q) => q.id === questionId);

  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ error: "Question not found" });
  }
});


router.get("/api/seisme", (req, res) => {
  res.json(questionseisme);
});

router.get("/api/seisme/:id", (req, res) => {
  const questionsseismeId = parseInt(req.params.id);
  const questionsseisme = questionsseisme.find((q) => q.id === questionsseismeId);

  if (questionsseisme) {
    res.json(questionsseisme);
  } else {
    res.status(404).json({ error: "Questions Seisme not found" });
  }
});


router.get("/api/tsunami", (req, res) => {
  res.json(questiontsunami);
});

router.get("/api/tsunami/:id", (req, res) => {
  const questiontsunamiId = parseInt(req.params.id);
  const questiontsunami = questiontsunami.find((q) => q.id === questiontsunamiId);

  if (questiontsunami) {
    res.json(questiontsunami);
  } else {
    res.status(404).json({ error: "Questions Seisme not found" });
  }
});


module.exports = router;
