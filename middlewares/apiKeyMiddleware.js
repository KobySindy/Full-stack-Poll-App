require("dotenv").config();

const API_KEY_HEADER_NAME = "poll-api-key";
const pollApiKey = process.env.pollApiKey;

function apiKeyMiddleware(req, res, next) {
  const headerApiKey = req.get(API_KEY_HEADER_NAME);
  console.log(pollApiKey);
  if (headerApiKey === pollApiKey) {
    next();
  } else {
    res.send(401);
  }
}

module.exports = apiKeyMiddleware;
