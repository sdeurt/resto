import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Commande } from './Commandes';

@Entity()
export class statuts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone' })
    date: Date;

    @ManyToOne(() => statuts, statut=> statut.commandes)
    statuts: statuts;


    @OneToMany(() => Commande, commande => commande.id)
    commandes: Commande[];
}