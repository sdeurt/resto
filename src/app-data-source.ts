import { DataSource } from "typeorm"
import { Commande } from "./entity/Commandes"
import { Menu } from "./entity/Menus"
import { Restaurant } from "./entity/Restaurants"
import { Statuts } from "./entity/Statuts"
import { Users } from "./entity/Users"
import * as dotenv from 'dotenv'
dotenv.config({path: '.env'})

export const myDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Users, Restaurant, Commande, Menu, Statuts],
    logging: true,
    synchronize: true,
})