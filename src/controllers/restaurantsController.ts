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
        const userId = Number(req.userId);

        //vérification données utilisateurs

        if (!ville || (typeof (ville) != 'string')) {
            res.status(400).json({
                status: 'fail',
                message: 'saisie incorrecte : ville manquante',
                data: null,
            })
            return;
        }

        
        
        try {
            //vérification si le restaurant existe déjà

            //création d'un nouveau restaurant
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

    //vérification si le restaurant existe déjà avant d'en ajouter un nouveau

    async updateRestaurant(req: Request, res: Response) {
        const { ville, restaurantId } = req.body
        try {
            const isRestaurantAlreadyExists = await restaurantsServices.selectRestaurantsById(ville);

            if (isRestaurantAlreadyExists) {
                res.status(400).json({
                    status: 'fail',
                    message: 'restaurant déja existant',
                    data: null
                });
                return;
            }; 

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
