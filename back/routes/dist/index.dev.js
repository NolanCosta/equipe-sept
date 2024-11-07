"use strict";

var express = require('express');

var router = express.Router();

var questions = require('../models/QuestionInondation');

router.get('/api/inondation', function (req, res) {
  res.json(questions);
});
router.get('/api/inondation/:id', function (req, res) {
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
module.exports = router;