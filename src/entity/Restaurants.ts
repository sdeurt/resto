import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Commande } from "./Commandes";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "character varying" })
    ville: string;

    @OneToMany(() => Commande, (commande) => commande.id)
    commandes: Commande[];

   
   
}