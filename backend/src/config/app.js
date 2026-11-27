import express from "express";
import cors from "cors";
import { noteRouteur } from "../routes/noteRoutes.js";

const app = express();

app.use(cors()); //Autorise ma partie frontend à communiquer avec mon backend
app.use(express.json()); //Permet de récupérer les données du body en format JSON

//PARTIE ROUTAGE
app.use("/api/note", noteRouteur);

export { app };
