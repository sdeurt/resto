
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Statuts } from './Statuts';
import { User } from './Users';

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone' })
    date: Date;

    @Column({ type: 'money' })
    price: number;

    @ManyToOne(() => User, user => user.id)
    userId: User;

    @OneToMany(() => Statuts, statut => statut.id)
    statut_id: Statuts
};