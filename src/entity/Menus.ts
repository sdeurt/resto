import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Commande } from './Commandes';

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
    commandesId: Commande[];

};