const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routeSiswa = require("./route/siswaRoute");

const dotenv = require("dotenv");
const { testConnection } = require("./database/Db");
dotenv.config();

app.use(bodyparser.json());
app.use(routeSiswa);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});
