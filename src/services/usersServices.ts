import { myDataSource } from "../app-data-source";
import { Users } from "../entity/users";
import { usersRouter } from "../router/usersRouter";

const userRepository = myDataSource.getRepository(Users);

export class UsersServices {
    
   
    async selectAllUsers() {
        const users = await Users.find();
        if (users) {
            return users;
        };
        return undefined;
    };

    async addUser(username: string, password: string, email: string, admin: boolean) {
        const user = new Users();
        user.username = username;
        user.password = password;
        user.e_mail = email;
        user.admin = admin;
        await Users.save(user);

        if (user) {
            return user;
        }
        return undefined;
    }


};
