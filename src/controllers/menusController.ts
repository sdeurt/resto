import { Request, Response } from "express";
import { Menu } from "../entity/Menus";
import { MenusServices } from "../services/menusServices";


const menusServices = new MenusServices();

export class MenusController {

    async getAllMenus(req: Request, res: Response) {
        try {
            const menus = await menusServices.selectAllMenus();
            res.status(200).json({
                status: 'ok',
                message: 'list menus ',
                data: menus
            })

        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });
        };
    };

    async getOneMenu(req: Request, res: Response) {
        const menu_id = parseInt(req.params.id)


        try {
            const menu = await menusServices.selectMenuById(menu_id);

            res.status(200).json({
                status: "OK",
                message: "menu récupéré",
                data: menu
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

    async addMenu(req: Request, res: Response) {
        const { price, name, restaurantId } = req.body;
        const userId = Number(req.userId);

        const messageErreur = {
            code: 400,
            status: 'fail',
            message: '',
            data: null
        };

        if (!price && !(typeof (price) != 'number')) {
            messageErreur.message = 'saisie incorrecte: prix manquant'
        }
        else if (!name && !(typeof (userId) != 'number')) {
            messageErreur.message = 'saisie incorrecte: idenfifiant ne correspond pas'
        }
        else if (!restaurantId && !(typeof (restaurantId) != 'number')) {
            messageErreur.message = 'saisie incorrecte: absence restaurantId'
        };

        try {
            const newMenu = await menusServices.addMenu(price, name);
            res.status(200).json({
                status: 'ok',
                message: ' menu ajouté',
                data: newMenu
            })
        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });
        };
    };


    async updateMenu(req: Request, res: Response) {
        const { price, name, restaurantId } = req.body;
        const updateId = parseInt(req.params.id);

        const messageErreur = {
            code: 400,
            status: "fail",
            message: "",
            data: null

        };
        if (!price && !(typeof (price) != 'number')) {
            messageErreur.message = "saisie incorrecte: absence prix"
        }

        else if (!name && (typeof (name) != 'number')) {
            messageErreur.message = ' saisie incorrecte : absence name'
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
            const updateMenu = await menusServices.updateMenu(updateId, price, name);
            res.status(200).json({
                status: 'ok',
                message: ' menu mis à jour',
                data: updateMenu
            })
        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });
        };
    }

    async deleteMenu(req: Request, res: Response) {
        const deleteId = parseInt(req.params.id);
        const userId = Number(req.userId)

        const messageErreur = {
            code: 400,
            status: "fail",
            message: "",
            data: null

        };
        if (!userId && !(typeof (userId) != 'number')) {
            messageErreur.message = "saisie incorrecte: userId manquant"
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
            const deleteMenu = await menusServices.deleteMenu(deleteId);
            res.status(200).json({
                status: 'ok',
                message: ' menu supprimé',
                data: deleteMenu
            })
        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });
        };

    };
};
