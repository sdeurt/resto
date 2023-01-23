import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Commande } from './Commandes';
//import { Restaurant } from './Restaurants';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'money' })
    price: number;

    @ManyToMany(() => Commande)
    @JoinTable()
    commandesId: Commande[]
    
   /*  @OneToMany(() => Menu, menus => menus.restaurant)
    menus: Menu[]; */

   /*  @ManyToOne(() => Restaurant, restaurant => restaurant.id)
    restaurant: Restaurant; */
}