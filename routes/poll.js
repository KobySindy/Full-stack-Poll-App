const { Poll } = require("../models/pollModel");
const apiKeyMiddleware = require("../middlewares/apiKeyMiddleware");
const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.post("/add-poll", apiKeyMiddleware, async (req, res) => {
  const title = req.body.title;
  const options = req.body.options;

  if (!title || !options) {
    return res.send(504);
  }

  let poll = new Poll({
    title: title,
    options: options,
  });

  post = await poll.save();
  res.send(post);
});

router.put("/:poll/vote/:option", async (req, res) => {
  const pollID = req.params.poll;
  const optionIndex = req.params.option;
  // console.log(pollID, optionIndex);
  if (!pollID || !optionIndex) {
    return res.send(504);
  }

  const incObject = {};
  incObject["options." + optionIndex + ".votes"] = 1;

  await Poll.findByIdAndUpdate(pollID, { $inc: incObject });
  res.send({ success: true });
});

module.exports = router;
