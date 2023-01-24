// Imports
import express = require("express");
import { CommandesController } from "../controllers/commandesController";


// Exports - Déclarations
export const commandesRouter = express.Router();
const commandesController = new CommandesController();


// Routes
commandesRouter.get('/:id', commandesController.getOneCommande);