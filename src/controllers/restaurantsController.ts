import { Request, Response } from "express";
import { Restaurant } from "../entity/Restaurants";
import { RestaurantsServices } from "../services/restaurantsServices";



const restaurantsServices = new RestaurantsServices();


export class RestaurantsController {

    async getAllRestaurants(req: Request, res: Response) {

        try {
            const restaurants = await restaurantsServices.selectAllRestaurants();
            res.status(200).json({
                status: 'ok',
                message: 'list restaurants ',
                data: restaurants
            })

        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });
        }
    }

    async selectRestaurantById(req: Request, res: Response) {
        const restaurant_id = parseInt(req.params.id);

        try {
            const restaurant = await restaurantsServices.selectRestaurantsById(restaurant_id);

            res.status(200).json({
                status: "OK",
                message: "restaurant trouvé",
                data: restaurant
            });
        }
        catch (error) {
            console.log((error.stack));

            res.status(500).json({
                status: "FAIL",
                message: "Erreur serveur",
                data: null
            });
        };
    };

    async addRestaurant(req: Request, res: Response) {
        const ville = req.body.ville
        try {
            const restaurant = await restaurantsServices.addRestaurant(ville);

            res.status(200).json({
                status: "OK",
                message: "restaurant ajouté",
                data: restaurant
            });

        }
        catch (error) {
            console.log((error.stack));

            res.status(500).json({
                status: "FAIL",
                message: "Erreur serveur",
                data: null
            });
        };
    };

    async updateRestaurant(req: Request, res: Response) {
        const {ville,restaurantId} = req.body
        try {
            const restaurant = await restaurantsServices.updateRestaurant(restaurantId, ville);

            res.status(200).json({
                status: "OK",
                message: "restaurant mis à jour",
                data: restaurant
            });

        }
        catch (error) {
            console.log((error.stack));

            res.status(500).json({
                status: "FAIL",
                message: "Erreur serveur",
                data: null
            });
        };
    };

    async deleteRestaurant(req: Request, res: Response) {
        const restaurantId = parseInt(req.params.id);
        try {
            const restaurant = await restaurantsServices.deleteRestaurant(restaurantId);

            res.status(200).json({
                status: "OK",
                message: "restaurant supprimé",
                data: restaurant
            });

        }
        catch (error) {
            console.log((error.stack));

            res.status(500).json({
                status: "FAIL",
                message: "Erreur serveur",
                data: null
            });
        };
    };

}
