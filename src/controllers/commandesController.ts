import { Request, Response } from "express";
import { Users } from "../entity/Users";
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

    async getAllCommandes (req: Request, res: Response) {
        try {
            const commandes = await commandesService.getAllCommandes();

            res.status(200).json({
                status: "OK",
                message: "liste des commandes",
                data: commandes
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


    async addCommandes(req: Request, res: Response) {
        const  price = (req.body.price)
         const  userId = (req.body.userId)
        
        try {
            const commandes = await commandesService.addCommandes(price, userId)

            res.status(200).json({
                status: "OK",
                message: "commande ajoutée",
                data: commandes
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

    async updateCommandes(req: Request, res: Response) {
        const  price = (req.body.price)
        const userId = (req.body.userId)
        const updateId = Number(req.params.id)
        
        try {
            const commandes = await commandesService.updateCommandes(price, userId, updateId)

            res.status(200).json({
                status: "OK",
                message: "commande mise à jour ",
                data: commandes
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
    }

    async deleteCommandes(req: Request, res: Response) {
        const deleteCommande_id = parseInt(req.params.id)
         const  userId = (req.body.userId)
        
        try {
            const commandes = await commandesService.deleteCommandes( deleteCommande_id)

            res.status(200).json({
                status: "OK",
                message: "commande supprimée ",
                data: commandes
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
    }
    
};