
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Menu } from './Menus';
import { Restaurant } from './Restaurants';
import { Users } from './Users';

@Entity()
export class Commande extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP" })
    date: Date;

    @Column({ type: 'money' })
    price: number;

    @ManyToOne(() => Users, user => user.commandes)
    userId: Users;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.commandes)
    restaurant: Restaurant;

    @ManyToOne(() => Menu, (menu) => menu.commandes_id)
    menu: Menu;

    static findCommandeById(id: number) {
        return this.createQueryBuilder("commande")
            .where("commande.id = :id", { id })
            .getOne()
    };

    static findCommandes() {
        return this.createQueryBuilder("commande")
            .getMany()
        /*   return this.createQueryBuilder()
              .select("commande")
              .from(Commande, "commande")
              .getMany() */
    };

    static findCommandesRestaurant(restaurant: string) {
        return this.createQueryBuilder(" commandeRestaurant")
        .where("commandesRestaurant.id = : restaurant", {restaurant} )
    };

    static addCommandes(price, menuId, userId, restaurantId) {
        return this.createQueryBuilder()
            .insert()
            .into(Commande)
            .values([
                { price: price, userId: userId, menu: menuId, restaurant: restaurantId }
            ])
            .returning("*")
            .execute()
    };

    static updateCommandes(price, userId, updateId) {
        return this.createQueryBuilder()
            .update()
            .set({ price: price, userId: userId })
            .where("id = :id", { id: updateId })
            .returning("*")
            .execute()
    };

    static deleteCommandes(deleteId) {
        return this.createQueryBuilder()
            .delete()
            .from(Commande)
            .where("id = :id", { id: deleteId })
            .returning("*")
            .execute()
    };
};

