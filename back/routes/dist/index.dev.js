"use strict";

var express = require("express");

var router = express.Router();

var questions = require("../models/QuestionInondation");

var questionseisme = require("../models/QuestionSeisme");

var questiontsunami = require("../models/QuestionTsunami");

router.get("/api/inondation", function (req, res) {
  res.json(questions);
});
router.get("/api/inondation/:id", function (req, res) {
  var questionId = parseInt(req.params.id);
  var question = questions.find(function (q) {
    return q.id === questionId;
  });

  if (question) {
    res.json(question);
  } else {
    res.status(404).json({
      error: "Question not found"
    });
  }
});
router.get("/api/seisme", function (req, res) {
  res.json(questionseisme);
});
router.get("/api/seisme/:id", function (req, res) {
  var questionsseismeId = parseInt(req.params.id);
  var questionsseisme = questionsseisme.find(function (q) {
    return q.id === questionsseismeId;
  });

  if (questionsseisme) {
    res.json(questionsseisme);
  } else {
    res.status(404).json({
      error: "Questions Seisme not found"
    });
  }
});
router.get("/api/tsunami", function (req, res) {
  res.json(questiontsunami);
});
router.get("/api/tsunami/:id", function (req, res) {
  var questiontsunamiId = parseInt(req.params.id);
  var questiontsunami = questiontsunami.find(function (q) {
    return q.id === questiontsunamiId;
  });

  if (questiontsunami) {
    res.json(questiontsunami);
  } else {
    res.status(404).json({
      error: "Questions Seisme not found"
    });
  }
});
module.exports = router;