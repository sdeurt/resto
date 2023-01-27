import express = require("express");
import { RestaurantsController } from "../controllers/restaurantsController";



export const restaurantsRouter = express.Router();
const restaurantsController = new RestaurantsController();


//routes

restaurantsRouter.get('/', restaurantsController.getAllRestaurants);
restaurantsRouter.get('/:id', restaurantsController.selectRestaurantById);
restaurantsRouter.post('/', restaurantsController.addRestaurant);
restaurantsRouter.put('/:id', restaurantsController.updateRestaurant);
restaurantsRouter.delete('/:id', restaurantsController.deleteRestaurant);



