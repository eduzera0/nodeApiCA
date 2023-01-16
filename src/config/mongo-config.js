import mongoose from "mongoose";

async function mongoSetup() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://eduardodb:123@nodeapi.6hsokzd.mongodb.net/curso_node");
        console.log("MongoDB conectado com sucesso")
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB: ", error)
    }
}

export default mongoSetup;