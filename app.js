const express = require("express");
const addDays = require("date-fns/addDays");

let app = express();

app.get("/", (request, response) => {
  let todaysDate = new Date();
  let findDays = addDays(
    new Date(
      todaysDate.getFullYear(),
      todaysDate.getMonth(),
      todaysDate.getDate()
    ),
    100
  );
  response.send(
    `${findDays.getDate()}/${findDays.getMonth() + 1}/${findDays.getFullYear()}`
  );
});

module.exports = app;
