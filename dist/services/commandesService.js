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
exports.CommandesService = void 0;
// Imports
const Commandes_1 = require("../entity/Commandes");
// Exports - Déclarations
class CommandesService {
    getCommandeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const commande = yield Commandes_1.Commande.findCommandeById(id);
            console.log(commande);
            return commande;
        });
    }
    ;
    getAllCommandes() {
        return __awaiter(this, void 0, void 0, function* () {
            const commandes = yield Commandes_1.Commande.findCommandes();
            console.log(commandes);
            return commandes;
        });
    }
    addCommandes(price, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandes = yield Commandes_1.Commande.addCommandes(price, userId);
            return commandes.raw;
        });
    }
    updateCommandes(price, userId, updateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandes = yield Commandes_1.Commande.updateCommandes(price, userId, updateId);
            return commandes;
        });
    }
    deleteCommandes(deleteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandes = yield Commandes_1.Commande.deleteCommandes(deleteId);
            return commandes;
        });
    }
}
exports.CommandesService = CommandesService;
;
