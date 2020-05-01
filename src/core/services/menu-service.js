/* eslint-disable class-methods-use-this */
import Menu from "../entities/menu";
import MenuSection from "../entities/menuSection";
import MenuItem from "../entities/menuItem";

export default class MenuService {
    constructor () { }

    getById (id) {
        return this.get().find(a => a.id === id);
    }

    get () {
        return [
            new Menu("1", "1", [

                new MenuSection("1", "Sandwiches", "1", [
                    new MenuItem(
                        "1", "Double Cheese Burger", "item-1.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    ),
                    new MenuItem(
                        "2", "Double Cheese Burger", "item-2.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    ),
                    new MenuItem(
                        "3", "Double Cheese Burger", "item-3.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    ),
                    new MenuItem(
                        "4", "Double Cheese Burger", "item-4.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    )
                ]),

                new MenuSection("2", "Sides", "1", [
                    new MenuItem("5", "2 Pcs Chicken Strips Spicy", "item-7.jpg", 20, "Chicken Strips Spicy"),
                    new MenuItem("6", "2 Pcs Chicken Strips", "item-7.jpg", 20, "Chicken Strips")
                ]),

                new MenuSection("3", "Salads", "1", [
                    new MenuItem(
                        "7", "Double Cheese Burger", "item-1.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    ),
                    new MenuItem(
                        "8", "Double Cheese Burger", "item-1.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    )
                ]),

                new MenuSection("4", "Specialities", "1", [
                    new MenuItem(
                        "9", "Double Cheese Burger", "item-1.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    ),
                    new MenuItem(
                        "10", "Double Cheese Burger", "item-1.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."
                    )
                ]),

                new MenuSection("5", "Beverages", "1", [
                    new MenuItem("11", "Coca-Cola", "item-5.png", 10, "Coca-Cola 160ml"),
                    new MenuItem("12", "Premium Cappuccino", "item-6.jpg", 15, "Premium Cappuccino")
                ])

            ])
        ];
    }
}
