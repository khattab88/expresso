import Branch from "../entities/branch";

import RestaurantService from "./restaurant-service";
import AreaService from "./area-service";

export default class BranchService {
    constructor () {
        // Dependency
        this.restaurantService = new RestaurantService();
        this.areaService = new AreaService();
    }

    getByArea (areaId) {
        return this.get().filter(b => b.area.id === areaId);
    }

    getById (id) {
        return this.get().find(b => b.id === id);
    }

    get () {
        return [
            new Branch("1", "Heliopolis Branch", this.restaurantService.getById("1"), this.areaService.getById("1")),
            new Branch("2", "Zamalek Branch", this.restaurantService.getById("1"), this.areaService.getById("2")),
            new Branch("3", "DownTown Branch", this.restaurantService.getById("1"), this.areaService.getById("3")),
            new Branch("4", "Nasr City Branch", this.restaurantService.getById("1"), this.areaService.getById("4")),
            new Branch("5", "Maadi Branch", this.restaurantService.getById("1"), this.areaService.getById("5")),
            new Branch("6", "Shoubra Branch", this.restaurantService.getById("1"), this.areaService.getById("6")),

            new Branch("7", "Heliopolis Branch", this.restaurantService.getById("2"), this.areaService.getById("1")),
            new Branch("8", "Zamalek Branch", this.restaurantService.getById("2"), this.areaService.getById("2")),
            new Branch("9", "DownTown Branch", this.restaurantService.getById("2"), this.areaService.getById("3")),
            new Branch("10", "Nasr City Branch", this.restaurantService.getById("2"), this.areaService.getById("4")),
            new Branch("11", "Maadi Branch", this.restaurantService.getById("2"), this.areaService.getById("5")),
            new Branch("12", "Maadi Branch", this.restaurantService.getById("2"), this.areaService.getById("6")),

            new Branch("13", "Heliopolis Branch", this.restaurantService.getById("3"), this.areaService.getById("1")),
            new Branch("14", "Zamalek Branch", this.restaurantService.getById("3"), this.areaService.getById("2")),
            new Branch("15", "DownTown Branch", this.restaurantService.getById("3"), this.areaService.getById("3")),
            new Branch("16", "Nasr City Branch", this.restaurantService.getById("3"), this.areaService.getById("4")),
            new Branch("17", "Maadi Branch", this.restaurantService.getById("3"), this.areaService.getById("5")),
            new Branch("18", "Maadi Branch", this.restaurantService.getById("3"), this.areaService.getById("6")),

            new Branch("19", "Heliopolis Branch", this.restaurantService.getById("4"), this.areaService.getById("1")),
            new Branch("20", "Zamalek Branch", this.restaurantService.getById("4"), this.areaService.getById("2")),
            new Branch("21", "DownTown Branch", this.restaurantService.getById("4"), this.areaService.getById("3")),
            new Branch("22", "Nasr City Branch", this.restaurantService.getById("4"), this.areaService.getById("4")),
            new Branch("23", "Maadi Branch", this.restaurantService.getById("4"), this.areaService.getById("5")),
            new Branch("24", "Maadi Branch", this.restaurantService.getById("4"), this.areaService.getById("6")),

            new Branch("25", "Heliopolis Branch", this.restaurantService.getById("5"), this.areaService.getById("1")),
            new Branch("26", "Zamalek Branch", this.restaurantService.getById("5"), this.areaService.getById("2")),
            new Branch("27", "DownTown Branch", this.restaurantService.getById("5"), this.areaService.getById("3")),
            new Branch("28", "Nasr City Branch", this.restaurantService.getById("5"), this.areaService.getById("4")),
            new Branch("29", "Maadi Branch", this.restaurantService.getById("5"), this.areaService.getById("5")),
            new Branch("30", "Maadi Branch", this.restaurantService.getById("5"), this.areaService.getById("6")),

            new Branch("31", "Heliopolis Branch", this.restaurantService.getById("6"), this.areaService.getById("1")),
            new Branch("32", "Zamalek Branch", this.restaurantService.getById("6"), this.areaService.getById("2")),
            new Branch("33", "DownTown Branch", this.restaurantService.getById("6"), this.areaService.getById("3")),
            new Branch("34", "Nasr City Branch", this.restaurantService.getById("6"), this.areaService.getById("4")),
            new Branch("35", "Maadi Branch", this.restaurantService.getById("6"), this.areaService.getById("5")),
            new Branch("36", "Maadi Branch", this.restaurantService.getById("6"), this.areaService.getById("6")),

            new Branch("37", "Heliopolis Branch", this.restaurantService.getById("7"), this.areaService.getById("1")),
            new Branch("38", "Zamalek Branch", this.restaurantService.getById("7"), this.areaService.getById("2")),
            new Branch("39", "DownTown Branch", this.restaurantService.getById("7"), this.areaService.getById("3")),
            new Branch("40", "Nasr City Branch", this.restaurantService.getById("7"), this.areaService.getById("4")),
            new Branch("41", "Maadi Branch", this.restaurantService.getById("7"), this.areaService.getById("5")),
            new Branch("42", "Maadi Branch", this.restaurantService.getById("7"), this.areaService.getById("6")),

            new Branch("43", "Heliopolis Branch", this.restaurantService.getById("8"), this.areaService.getById("1")),
            new Branch("44", "Zamalek Branch", this.restaurantService.getById("8"), this.areaService.getById("2")),
            new Branch("45", "DownTown Branch", this.restaurantService.getById("8"), this.areaService.getById("3")),
            new Branch("46", "Nasr City Branch", this.restaurantService.getById("8"), this.areaService.getById("4")),
            new Branch("47", "Maadi Branch", this.restaurantService.getById("8"), this.areaService.getById("5")),
            new Branch("48", "Maadi Branch", this.restaurantService.getById("8"), this.areaService.getById("6")),

            new Branch("49", "Heliopolis Branch", this.restaurantService.getById("9"), this.areaService.getById("1")),
            new Branch("50", "Zamalek Branch", this.restaurantService.getById("9"), this.areaService.getById("2")),
            new Branch("51", "DownTown Branch", this.restaurantService.getById("9"), this.areaService.getById("3")),
            new Branch("52", "Nasr City Branch", this.restaurantService.getById("9"), this.areaService.getById("4")),
            new Branch("53", "Maadi Branch", this.restaurantService.getById("9"), this.areaService.getById("5")),
            new Branch("54", "Maadi Branch", this.restaurantService.getById("9"), this.areaService.getById("6")),

            new Branch("55", "Heliopolis Branch", this.restaurantService.getById("10"), this.areaService.getById("1")),
            new Branch("56", "Zamalek Branch", this.restaurantService.getById("10"), this.areaService.getById("2")),
            new Branch("57", "DownTown Branch", this.restaurantService.getById("10"), this.areaService.getById("3")),
            new Branch("58", "Nasr City Branch", this.restaurantService.getById("10"), this.areaService.getById("4")),
            new Branch("59", "Maadi Branch", this.restaurantService.getById("10"), this.areaService.getById("5")),
            new Branch("60", "Maadi Branch", this.restaurantService.getById("10"), this.areaService.getById("6")),

            new Branch("61", "Heliopolis Branch", this.restaurantService.getById("11"), this.areaService.getById("1")),
            new Branch("62", "Zamalek Branch", this.restaurantService.getById("11"), this.areaService.getById("2")),
            new Branch("63", "DownTown Branch", this.restaurantService.getById("11"), this.areaService.getById("3")),
            new Branch("64", "Nasr City Branch", this.restaurantService.getById("11"), this.areaService.getById("4")),
            new Branch("65", "Maadi Branch", this.restaurantService.getById("11"), this.areaService.getById("5")),
            new Branch("66", "Maadi Branch", this.restaurantService.getById("11"), this.areaService.getById("6")),

            new Branch("67", "Heliopolis Branch", this.restaurantService.getById("12"), this.areaService.getById("1")),
            new Branch("68", "Zamalek Branch", this.restaurantService.getById("12"), this.areaService.getById("2")),
            new Branch("69", "DownTown Branch", this.restaurantService.getById("12"), this.areaService.getById("3")),
            new Branch("70", "Nasr City Branch", this.restaurantService.getById("12"), this.areaService.getById("4")),
            new Branch("71", "Maadi Branch", this.restaurantService.getById("12"), this.areaService.getById("5")),
            new Branch("72", "Maadi Branch", this.restaurantService.getById("12"), this.areaService.getById("6")),

        ];
    }
}
