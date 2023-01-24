import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Commande } from './Commandes';

@Entity()
export class Statuts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone' })
    date: Date;

    @OneToMany(() => Commande, commande => commande.id)
    commandes: Commande[];

};