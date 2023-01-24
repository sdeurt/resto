"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandesController = void 0;
const commandesService_1 = require("../services/commandesService");
const commandesService = new commandesService_1.CommandesService();
class CommandesController {
    getAddCommandes(arg0, getAddCommandes) {
        throw new Error("Method not implemented.");
    }
    getOneCommande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const commande_id = parseInt(req.params.id);
            try {
                const commande = yield commandesService.getCommandeById(commande_id);
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
            }
            ;
        });
    }
    ;
    getAllCommandes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commandes = yield commandesService.getAllCommandes();
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
            }
            ;
        });
    }
    ;
    addCommandes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commandes = yield commandesService.getAddCommandes();
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
            }
            ;
        });
    }
    ;
}
exports.CommandesController = CommandesController;
;
