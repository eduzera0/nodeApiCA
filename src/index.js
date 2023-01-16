import express from "express";
import mongoSetup from "./config/mongo-config.js";
import { JogoView } from "./db/views/jogosView.js";
import jogos from "./router/jogos.js";

const port = process.env.PORT || 3000;
const server = express();

server.use(express.json())

server.listen(port, async () => {
	mongoSetup()
	server.use("/jogos", new JogoView)
	console.log(`Server is running at port ${port}`)
})
