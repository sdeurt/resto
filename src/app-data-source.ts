import { DataSource } from "typeorm"
import { Commande } from "./entity/Commandes"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Merde2021!",
    database: "resto",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
    

})

