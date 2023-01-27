// Imports
import { Commande } from "../entity/Commandes";
import { Menu } from "../entity/Menus";
import { Restaurant } from "../entity/Restaurants";
import { Users } from "../entity/users";



// Exports - Déclarations

export class CommandesService {

    async getCommandeById(id: number) {
        const commande = await Commande.findCommandeById(id);

        console.log(commande);

        return commande;

    };

    async getAllCommandes() {
        const commandes = await Commande.findCommandes();

        console.log(commandes);

        return commandes;
    }

    async addCommandes(price: number, userId: number, menuId: number, restaurantId: number) {
        const commandes = await Commande.addCommandes(price , userId, menuId, restaurantId); 

        return commandes.raw;
    }
    
    async updateCommandes(price: number, userId: number, restaurantId: number, menuId: number, updateId: number) {
        const commandes = await Commande.updateCommandes(price, userId, menuId, restaurantId, updateId);

        return commandes;
    }

    async deleteCommandes(deleteId: number) {
        const commande = await Commande.findOneBy({ id: deleteId })
        if (commande) {
            commande.remove()
        }
       // const commandes = await Commande.deleteCommandes(deleteId );

        return commande;
    }
};

