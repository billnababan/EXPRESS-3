const { query } = require("../database/Db");

const getSiswa = async (req, res) => {
  try {
    const result = await query("SELECT * FROM mahasiswa");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getSiswaById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("SELECT * FROM mahasiswa where id = ?", [id]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "ada yg salah", error });
  }
};

const addSiswa = async (req, res) => {
  const { nama } = req.body;
  try {
    await query("INSERT INTO mahasiswa (nama) VALUES(?)", [nama]);
    return res.status(200).json({
      pesan: "penambahan siswa berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateSiswa = async (req, res) => {
  const { nama } = req.body;
  const { id } = req.params;
  try {
    await query("UPDATE mahasiswa SET nama = ? where id = ?", [nama, id]);
    return res.status(200).json({
      pesan: "perubahan siswa berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteSiswa = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM mahasiswa where id = ?", [id]);
    return res.status(200).json({
      pesan: "hapus siswa berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSiswa,
  getSiswaById,
  addSiswa,
  updateSiswa,
  deleteSiswa,
};
