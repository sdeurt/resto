
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

    @ManyToOne(() => Statuts, statut => statut.id)
    statut_id: Statuts

    @ManyToOne(() => Users, user => user.id)
    userId: Users;
    static findAddCommandes: any;

    static findCommandeById(id: number) {
        return this.createQueryBuilder("commande")
        .where("commande.id = :id", {id})
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

    static addCommandes(price , userId ) {
        return this.createQueryBuilder()
        .insert()
        .into(Commande)
        .values([
            { price: price , userId: userId },
        ])
        .returning ("*")
        .execute()
    }

};