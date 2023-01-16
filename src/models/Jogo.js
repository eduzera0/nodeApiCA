import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema(
	{
		id: {type: String},
		titulo: {type: String, required: true},
		genero: {type: mongoose.Schema.Types.ObjectId, ref: 'generos', required: true}
	}
);

const 	DbJogos = mongoose.model('jogos', jogoSchema);

export default DbJogos;
