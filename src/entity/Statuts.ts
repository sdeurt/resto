import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Commande } from './Commandes';

@Entity()
export class Statuts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    intitule: string;

    @OneToMany(() => Commande, commande => commande.id)
    commandes: Commande[];

};