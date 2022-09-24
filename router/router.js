const express = require("express");
const app = express();
const sendEmailRouter = require("../app/sendEmail");
app.use(express.json());
app.use("/send", sendEmailRouter);
module.exports = app;