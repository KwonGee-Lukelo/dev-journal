import express from "express";

const noteRouteur = express.Router();

noteRouteur.post("/", (req, res) => {
  const newNotes = req.body;
  console.log(newNotes);
  res.json({ message: "Données reçues avec succès" });
});

export { noteRouteur };
