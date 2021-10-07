const mongoose = require("mongoose");

const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
const MONGODB_URI = `${MONGODB_HOST}/${MONGODB_DATABASE}`;
console.log(MONGODB_URI);

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("connect database"))
  .catch((err) => console.log(err));
