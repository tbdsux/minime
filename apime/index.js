const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const validUrl = require("valid-url");
const { nanoid } = require("nanoid");
const { deta, db } = require("./lib");

const app = express();

// setup cors
app.use(cors());

// body parser
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Minime URL Minifier / Shrinker / Shortener",
  });
});

// Get the short url link.
app.get("/query", async (req, res) => {
  const { link } = req.query;

  // validate link to query
  if (!link) {
    res.status(400).json({
      error: true,
      message: "Bad request.",
    });
    return;
  }

  // fetch key
  const data = await db.get(link);

  // check if data is null
  // null means the key does not exist
  if (data == null) {
    res.status(404).json({
      error: true,
      message: "Shortlink does not exist.",
    });
    return;
  }

  res.status(200).json({
    error: false,
    data,
  });
});

// Shrink / minify a url.
app.post("/minify", async (req, res) => {
  const { url } = req.body;

  // validate url if non-null or empty
  if (!url) {
    res.status(400).json({
      error: true,
      message: "Bad request.",
    });
    return;
  }

  // validate if a valud web uri
  if (!validUrl.isWebUri(url)) {
    res.status(400).json({
      error: true,
      message: "Url is not a valid web uri.",
    });
    return;
  }

  const shorten = nanoid(4);
  const data = {
    url,
    shorten,
  };

  try {
    // try to store new data
    // use shortlink as key for easier data access
    const s = await db.put(data, shorten);

    // return data
    res.status(200).json({
      error: false,
      data: s,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: true,
      message: "Failed to shorten url. Please try again later.",
    });
  }
});

// run only in dev
if (process.env.NODE_ENV === "development") {
  app.listen(8000, () => {
    console.log("Listening on http://localhost:8000");
  });
}

// export 'app'
module.exports = app;
