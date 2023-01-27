import express = require("express");
import { RestaurantsController } from "../controllers/restaurantsController";
import { authenticateJWT } from "../middlewares/auth";


export const restaurantsRouter = express.Router();
const restaurantsController = new RestaurantsController();


//routes

restaurantsRouter.get('/', restaurantsController.getAllRestaurants);
restaurantsRouter.get('/:id', restaurantsController.selectRestaurantById);
restaurantsRouter.post('/', authenticateJWT, restaurantsController.addRestaurant);
restaurantsRouter.put('/:id', authenticateJWT, restaurantsController.updateRestaurant);
restaurantsRouter.delete('/:id', authenticateJWT, restaurantsController.deleteRestaurant);



