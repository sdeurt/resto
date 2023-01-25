import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Commande } from './Commandes';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'money' })
    price: number;

    @OneToMany(() => Commande, commande => commande.menu)
    commandes_id: Commande []

};