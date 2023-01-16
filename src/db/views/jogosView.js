import DbJogos from "../../models/Jogo.js"

export class JogoView {
	async findAll(){ 
		return DbJogos.find({})
	}

	async create()
}


