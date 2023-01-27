import { Request, response, Response } from "express";
import { UsersServices } from "../services/usersServices";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken"
import { Users } from "../entity/users";


const usersServices = new UsersServices();

const accessTokenSecret = process.env.TOKEN_SECRET as string;

export class UsersController {
    
    async getAllUsers(req: Request, res: Response) {

        try {
            const users = await usersServices.selectAllUsers();
            res.status(200).json({
                status: 'ok',
                message: 'list users',
                data: users
            })
        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });

        };
    };

    async register(req: Request, res: Response) {
        const { username, password, email, admin } = req.body;

        bcrypt.hash(password, 10, async (error, password) => {

            try {
                const user = await usersServices.addUser(username, password, email, admin);
                res.status(200).json({
                    status: 'ok',
                    message: 'user created',
                    data: user
                })
            }
            catch (error) {
                console.log(error.stack);
                res.status(500).json({
                    status: 'fail',
                    message: 'erreur serveur ou inconnu',
                    data: null
                });

            };

        });
    };


    async login(req: Request, res: Response) {
        const { username, password } = req.body;





        try {


            const user = await Users.findOneBy({
                username: username
            });
            console.log(user.password);

            const token = jwt.sign({ userId: user.id }, accessTokenSecret);


            bcrypt.compare(password, user.password, async (error, result) => {
                if (result == true) {
                    res.status(200).json({
                        status: 'success',
                        message: 'acces autorisé',
                        data: { token: token, admin: user.admin }
                    })
                }
                else {
                    res.status(403).json({
                        status: 'fail',
                        message: 'accés non autorisé, identifiants incorrects',
                        data: null
                    })
                }
            })
        }
        catch (error) {
            console.log(error.stack);
            res.status(500).json({
                status: 'fail',
                message: 'erreur serveur ou inconnu',
                data: null
            });

        }



    };
};
