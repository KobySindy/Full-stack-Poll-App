const { Poll } = require("../models/pollModel");
const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("", async (req, res) => {
  const NUMBER_OF_POLLS = 3;
  let pageIndex = req.query.page;

  // in case page doesn't exist the default will be pageIndex number 1
  if (!pageIndex) {
    pageIndex = "1";
  }

  pageIndex = parseInt(pageIndex);
  const skip = (pageIndex - 1) * NUMBER_OF_POLLS;
  const limit = NUMBER_OF_POLLS + 1; // adding 1 to help figure out if we reached to the end (=`complete` param)

  const allPolls = await Poll.find(undefined, undefined, {
    skip: skip,
    limit: limit,
  });

  let complete = false;
  if (allPolls.length < limit) {
    complete = true;
  }

  const results = {
    data: allPolls.slice(0, NUMBER_OF_POLLS), // slicing the NUMBER_OF_POLLS first items from the return data of the mongo query
    page: pageIndex,
    complete: complete,
  };
  res.send(results);
});

module.exports = router;
