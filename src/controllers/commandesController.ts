import { Request, Response } from "express";
import { CommandesService } from "../services/commandesService";


const commandesService = new CommandesService();


export class CommandesController {
    async getOneCommande (req: Request, res: Response) {
        const commande_id = parseInt(req.params.id)
        try {
            const commande = await commandesService.getCommandeById(commande_id);

            res.status(200).json({
                status: "OK",
                message: "Commande récupérée",
                data: commande
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
};