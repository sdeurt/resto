import { JsonWebTokenError } from 'jsonwebtoken';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, Index} from 'typeorm';
import { Commande } from './commandes';

export enum RoleEnumType {
    USER = 'user',
    ADMIN = 'admin',
}

@Entity('users')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar', })
    password: string;

    @Column({ type: 'boolean', default: false })
    admin: boolean;

    @Column({ type: 'varchar'})
    e_mail: string;

    @Column({
        type: 'enum',
        enum: RoleEnumType,
        default: RoleEnumType.USER,
    })
    role: RoleEnumType.USER;

    toJSON() {
        return { ...this, password: undefined, verified: undefined };
    }

    @OneToMany(() => Commande, (commande)=> commande.userId)
    commandes: Commande [];


    
};


