import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Commande } from './Commandes';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean', default: false })
    admin: boolean;

    @OneToMany(() => Commande, (commande)=> commande.id)
    commandes: Commande [];
}