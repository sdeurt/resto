import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm';
import { Commande } from "./Commandes";

@Entity()
export class Restaurant extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    ville: string;

    @OneToMany(() => Commande, (commande) => commande.restaurant)
    commandes: Commande[];
  

};
