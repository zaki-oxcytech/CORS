const express = require("express");
const app = express();
const cors = require("cors");

var allowedOrigin = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    // console.log("Origin: ", allowedOrigin.indexOf(origin));
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS Error"));
    }
  },
  methods: "GET",
};

app.use(cors(corsOptions));

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "CORS example with demo",
    },
    {
      id: 2,
      title: "CORS with React APP",
    },
  ]);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
