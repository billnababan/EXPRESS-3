const express = require("express");
const { getSiswa, addSiswa, updateSiswa, deleteSiswa, getSiswaById } = require("../controller/siswaController");
const route = express.Router();

route.get("/siswa", getSiswa);
route.get("/siswa/:id", getSiswaById);
route.post("/siswa", addSiswa);
route.put("/siswa/:id", updateSiswa);
route.delete("/siswa/:id", deleteSiswa);

module.exports = route;
