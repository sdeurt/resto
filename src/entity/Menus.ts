import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Commande } from './commandes';

@Entity()
export class Menu extends BaseEntity {
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'money' })
    price: number;

    @OneToMany(() => Commande, commande => commande.menu)
    commandes_id: Commande []

};