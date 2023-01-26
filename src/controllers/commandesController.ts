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
        
         const { price, userId, menuId, restaurantId } = req.body;

        const messageErreur = {
            code: 400,
            status: "fail",
            message: "",
            data: null

        };
        if (!price && !(typeof (price) != 'number')) {
            messageErreur.message = "saisie incorrecte: absence prix"
        }

        else if (!menuId && !(typeof (menuId) != 'number')) {
            messageErreur.message = ' saisie incorrecte : absence menuId'
        }
        else if (!restaurantId && !(typeof (restaurantId) != 'number')) {
            messageErreur.message = ' saisie incorrecte : absence restaurantId'

        }
        if (messageErreur.message) {
            res.status(messageErreur.code).json({
                status: 'fail',
                message: messageErreur.message,
                date: null
            });

            return;
        };
            
        
        
        try {
            const commandes = await commandesService.addCommandes(price, userId,  menuId, restaurantId)

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
        /* const  price = (req.body.price)
        const userId = (req.body.userId) */
        const updateId = Number(req.params.id)

        
        const { price, menuId, userId, restaurantId } = req.body;

        const messageErreur = {
            code: 400,
            status: "fail",
            message: "",
            data: null

        };
        if (!price && !(typeof (price) != 'number')) {
            messageErreur.message = "saisie incorrecte: absence prix"
        }

        else if (!menuId && (typeof (menuId) != 'number')) {
            messageErreur.message = ' saisie incorrecte : absence menuId'
        }
        else if (!restaurantId && !(typeof (restaurantId) != 'number')) {
            messageErreur.message = ' saisie incorrecte : absence restaurantId'

        }
        if (messageErreur.message) {
            res.status(messageErreur.code).json({
                status: 'fail',
                message: messageErreur.message,
                date: null
            });

            return;
        };
            
        console.log('test');
        
        try {
            const commandes = await commandesService.updateCommandes(price, userId,restaurantId, menuId, updateId )

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
        const userId = (req.body.userId)
        

        const messageErreur = {
            code: 400,
            status: "fail",
            message: "",
            data: null

        };
        if (!userId && !(typeof (userId) != 'number')) {
            messageErreur.message = "saisie incorrecte: absence prix"
        }

        if (messageErreur.message) {
            res.status(messageErreur.code).json({
                status: 'fail',
                message: messageErreur.message,
                date: null
            });

            return;
        };
        
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