require("dotenv").config();
const express = require("express");
const router = require('./router/router')
const app = express();
app.use(express.json());
app.use("/v1", router);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running on PORT :${port}`);
});
