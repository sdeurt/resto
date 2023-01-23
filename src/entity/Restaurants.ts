import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Commande } from "./Commandes";
//import { Menu } from './Menus';

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "character varying" })
    ville: string;

    @OneToMany(() => Commande, (commande) => commande.id)
    commandes: Commande[];

   /*  @ManyToMany(() => Menu)
    @JoinTable()
    menus: Menu []
     */
   
}