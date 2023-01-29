import { DataSource } from "typeorm"
import { Commande } from "./entity/commandes"
import { Menu } from "./entity/menus"
import { Restaurant } from "./entity/restaurants"
import { Users } from "./entity/users"
import * as dotenv from 'dotenv'
dotenv.config({path: '.env'})


export const myDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Users, Restaurant, Commande, Menu],
    logging: false,
    synchronize: true,
});