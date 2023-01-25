"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const Commandes_1 = require("./entity/Commandes");
const Menus_1 = require("./entity/Menus");
const Restaurants_1 = require("./entity/Restaurants");
const Statuts_1 = require("./entity/Statuts");
const Users_1 = require("./entity/Users");
const dotenv = require("dotenv");
dotenv.config({ path: '.env' });
exports.myDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Users_1.Users, Restaurants_1.Restaurant, Commandes_1.Commande, Menus_1.Menu, Statuts_1.Statuts],
    logging: false,
    synchronize: true,
});
