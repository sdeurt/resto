// Imports
import { Commande } from "../entity/Commandes";



// Exports - Déclarations

export class CommandesService {

    async getCommandeById(id: number) {
        const commande = await Commande.findCommandeById(id);

        console.log(commande);

        return commande;
        
    };
};

