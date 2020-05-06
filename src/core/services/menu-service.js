/* eslint-disable function-paren-newline */
/* eslint-disable class-methods-use-this */
import Menu from "../entities/menu";
import MenuSection from "../entities/menuSection";
import MenuItem from "../entities/menuItem";
import Option from "../entities/option";
import OptionItem from "../entities/optionItem";
import OptionType from "../enums/optionType";

export default class MenuService {
    constructor () {}

    getById (id) {
        return this.get().find(a => a.id === id);
    }

    get () {
        return [
            new Menu("1", "1", [

                new MenuSection("1", "Sandwiches", "1", [
                    new MenuItem(
                        "1", "Double Cheese Burger", "item-1.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                        [
                            new Option("1", "1", OptionType.Required, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("1", "1", "Potato Bun", 7),
                                    new OptionItem("2", "1", "Lettuce Wrap", 3)
                                ]),
                            new Option("2", "1", OptionType.Optional, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("3", "2", "No Cheese", 0),
                                    new OptionItem("4", "2", "Regular", 3),
                                    new OptionItem("5", "2", "Cheddar", 5),
                                    new OptionItem("6", "2", "Spicy", 10)
                                ])
                        ]
                    ),
                    new MenuItem(
                        "2", "Double Cheese Burger", "item-2.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                        [
                            new Option("3", "2", OptionType.Required, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("7", "3", "Potato Bun", 7),
                                    new OptionItem("8", "3", "Lettuce Wrap", 3)
                                ]),
                            new Option("4", "2", OptionType.Optional, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("9", "4", "No Cheese", 0),
                                    new OptionItem("10", "4", "Regular", 3),
                                    new OptionItem("11", "4", "Cheddar", 5),
                                    new OptionItem("12", "4", "Spicy", 10)
                                ])
                        ]
                    ),
                    new MenuItem(
                        "3", "Double Cheese Burger", "item-3.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                        [
                            new Option("5", "3", OptionType.Required, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("13", "5", "Potato Bun", 7),
                                    new OptionItem("14", "5", "Lettuce Wrap", 3)
                                ]),
                            new Option("6", "3", OptionType.Optional, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("15", "6", "No Cheese", 0),
                                    new OptionItem("16", "6", "Regular", 3),
                                    new OptionItem("17", "6", "Cheddar", 5),
                                    new OptionItem("18", "6", "Spicy", 10)
                                ])
                        ]
                    ),
                    new MenuItem(
                        "4", "Double Cheese Burger", "item-4.png", 70,
                        "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                        [
                            new Option("7", "4", OptionType.Required, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("19", "7", "Potato Bun", 7),
                                    new OptionItem("20", "7", "Lettuce Wrap", 3)
                                ]),
                            new Option("8", "4", OptionType.Optional, "Choice of bun or lettuce wrap", 
                                [
                                    new OptionItem("21", "8", "No Cheese", 0),
                                    new OptionItem("22", "8", "Regular", 3),
                                    new OptionItem("23", "8", "Cheddar", 5),
                                    new OptionItem("24", "8", "Spicy", 10)
                                ])
                        ]
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
