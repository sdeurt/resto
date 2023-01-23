
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { User } from './Users';

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp with time zone' })
    date: Date;

    @Column({ type: 'varchar' })
    status: string;

    @Column({ type: 'money' })
    price: number;


    @ManyToOne(() => User, user => user.id)
    userId: User;

}