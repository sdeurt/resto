import { Restaurant } from "../entity/Restaurants";



//exports - déclarations

export class RestaurantsServices {

    async selectAllRestaurants() {
        const restaurants = await Restaurant.find();
        if (restaurants) {
            return restaurants;
        };
        return undefined;
    };

    async selectRestaurantsById(id: number) {
        const restaurants = await Restaurant.findOneBy({ id: id });

        if (restaurants) {
            return restaurants;
        };

        return undefined;
    };

    async addRestaurant(ville: string) {
        const newrestaurant = new Restaurant()
        newrestaurant.ville = ville
        await newrestaurant.save();

        return newrestaurant;


    };

    async updateRestaurant(restaurantId: number, ville: string) {
        const updateRestaurant = await Restaurant.findOneBy({ id: restaurantId });
        if (updateRestaurant) {
            updateRestaurant.ville = ville;
            await updateRestaurant.save()
        };

        return updateRestaurant;
    };

    async deleteRestaurant(deleteId: number) {
        const deleteRestaurant = await Restaurant.findOneBy({ id: deleteId });
        await deleteRestaurant.remove();

        if (deleteRestaurant) {
            return deleteRestaurant;
        };
        return undefined;
    };
};













