import express = require("express");
import { MenusController } from "../controllers/menusController";
import { MenusServices } from "../services/menusServices";


export const menusRouter = express.Router();
const menusController = new MenusController();


// routes

menusRouter.get('/', menusController.getAllMenus);
menusRouter.get('/:id', menusController.getOneMenu);
menusRouter.post('/', menusController.addMenu);
menusRouter.put('/:id', menusController.updateMenu);
menusRouter.delete('/:id', menusController.deleteMenu); 

