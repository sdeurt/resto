// Imports
import { Commande } from "../entity/Commandes";
import { Users } from "../entity/Users";



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

    async addCommandes(price, menuId, userId, restaurantId) {
        const commandes = await Commande.addCommandes(price, menuId, userId, restaurantId); 

        return commandes.raw;
    }
    
    async updateCommandes(price, userId, updateId) {
        const commandes = await Commande.updateCommandes(price, userId, updateId);

        return commandes;
    }

    async deleteCommandes(deleteId) {
        const commandes = await Commande.deleteCommandes(deleteId );

        return commandes;
    }
};

