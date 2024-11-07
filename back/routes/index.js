const express = require("express");
const router = express.Router();

const questions = require("../models/QuestionInondation");

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

module.exports = router;
