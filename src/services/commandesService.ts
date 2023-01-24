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

    async addCommandes(price , userId) {
        const commandes = await Commande.addCommandes(price , userId); 

        return commandes.raw;
        }

};

