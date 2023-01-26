import { JsonWebTokenError } from 'jsonwebtoken';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Commande } from './Commandes';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean', default: false })
    admin: boolean;

    @Column({type: "varchar"})
    e_mail: string;

    @OneToMany(() => Commande, (commande)=> commande.userId)
    commandes: Commande [];

};

