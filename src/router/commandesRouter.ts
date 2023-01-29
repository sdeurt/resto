// Imports
import express = require("express");
import { CommandesController } from "../controllers/commandesController";
import { RestaurantsController } from "../controllers/restaurantsController";
import { authenticateJWT } from "../middlewares/auth";
import { restaurantsRouter } from "./restaurantsRouter";


// Exports - Déclarations
export const commandesRouter = express.Router();
const commandesController = new CommandesController();


// Routes
commandesRouter.get('/:id', commandesController.getOneCommande);
commandesRouter.get('/', commandesController.getAllCommandes);
commandesRouter.post('/', authenticateJWT, commandesController.addCommandes);
commandesRouter.put('/:id', authenticateJWT, commandesController.updateCommandes);
commandesRouter.delete('/:id', commandesController.deleteCommandes);