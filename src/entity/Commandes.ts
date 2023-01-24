
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Statuts } from './Statuts';
import { Users } from './Users';

@Entity()
export class Commande extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP" })
    date: Date;

    @Column({ type: 'money' })
    price: number;

    @ManyToOne(() => Users, user => user.id)
    user_id: Users;

    @ManyToOne(() => Statuts, statut => statut.id)
    statut_id: Statuts

    static findCommandeById(id: number) {
        return this.createQueryBuilder("commande")
        .where("commande.id = :id", {id})
        .getOne()
    };
};