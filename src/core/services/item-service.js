import MenuService from "./menu-service";

export default class ItemService {
    constructor () {
        // Dependency
        this.menuService = new MenuService();
    }

    getById (id) {
        return this.get().find(item => item.id === id);
    }

    get () {
        let items = [];

        this.menuService.get().forEach(menu => {
            menu.menuSections.forEach(section => {
                section.menuItems.forEach(item => items.push(item));
            });
        });

        return items;
    }
}
