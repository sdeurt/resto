import { Menu } from "../entity/Menus";
import { menusRouter } from "../router/menusRouter";

//exports - declarations


export class MenusServices {

    async selectAllMenus() {
        const menus = await Menu.find();
        if (menus) {
            return menus
        }
        return undefined;
    };

    async selectMenuById(id: number) {

        const menus = await Menu.findOneBy({ id: id });
        if (menus) {
            return menus;
        }
        return undefined;
    };

    async addMenu(price: number, name: string) {
        const newMenu = new Menu();
        newMenu.price = price;
        newMenu.name = name;
        await newMenu.save();

        return newMenu;
    };

    async updateMenu(updateId: number, price: number, name: string) {
        const updateMenu = await Menu.update({ id: updateId }, { price: price, name: name });
        if (updateMenu) {
            return await Menu.findOneBy({ id: updateId });
        };
        return undefined;
    };

    async deleteMenu(deleteId: number) {
        const deleteMenu = await Menu.findOneBy({ id: deleteId });

        await deleteMenu.remove();

        if (deleteMenu) {
            return deleteMenu
        };
        return undefined;
    };


    /* async updateMenus(id: number, price:number, name: string ) {
        const menus = await Menu.update( price , name);

        return menus;
    } */

    /*   async deleteMenus(deleteId: number) {
          const Menus = await Menu.findOneBy({ id: deleteId })
          if (menus) {
              menus.remove()
          }
         // const commandes = await Commande.deleteCommandes(deleteId );
  
          return menus;
      } */


}