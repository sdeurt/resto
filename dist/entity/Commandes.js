"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Commande_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commande = void 0;
const typeorm_1 = require("typeorm");
const Statuts_1 = require("./Statuts");
const Users_1 = require("./Users");
let Commande = Commande_1 = class Commande extends typeorm_1.BaseEntity {
    static findCommandeById(id) {
        return this.createQueryBuilder("commande")
            .where("commande.id = :id", { id })
            .getOne();
    }
    ;
    static findCommandes() {
        return this.createQueryBuilder("commande")
            .getMany();
        /*   return this.createQueryBuilder()
              .select("commande")
              .from(Commande, "commande")
              .getMany() */
    }
    ;
    static addCommandes(price, userId) {
        return this.createQueryBuilder()
            .insert()
            .into(Commande_1)
            .values([
            { price: price, userId: userId },
        ])
            .returning("*")
            .execute();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Commande.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Commande.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'money' }),
    __metadata("design:type", Number)
], Commande.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Statuts_1.Statuts, statut => statut.id),
    __metadata("design:type", Statuts_1.Statuts)
], Commande.prototype, "statut_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, user => user.id),
    __metadata("design:type", Users_1.Users)
], Commande.prototype, "userId", void 0);
Commande = Commande_1 = __decorate([
    (0, typeorm_1.Entity)()
], Commande);
exports.Commande = Commande;
;
