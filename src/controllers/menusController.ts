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
        const { price, name } = req.body;
        
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
        const { price, name } = req.body;
        const updateId = parseInt(req.params.id);

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
        try {
            const deleteMenu = await menusServices.deleteMenu( deleteId );
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
