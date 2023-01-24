
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Statuts } from './Statuts';
import { Users } from './Users';

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column({ type: 'money' })
    price: number;

    @ManyToOne(() => Statuts, statuts => statuts.id )
    statut: Statuts;

    @ManyToOne(() => Users, user => user.id)
    userId: Users;

}