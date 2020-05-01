/* eslint-disable function-paren-newline */
/* eslint-disable class-methods-use-this */
import Country from "../entities/country";
import City from "../entities/city";
import Area from "../entities/area";

export default class CityService {
    constructor () {}

    get () {
        return [
            new City("1", "Cairo",
                new Country("1", "Egypt"),
                [
                    new Area("1", "Heliopolis"),
                    new Area("2", "Zamalek"),
                    new Area("3", "DownTown"),
                    new Area("4", "Nasr City"),
                    new Area("5", "Maadi"),
                    new Area("6", "Shoubra")
                ]),

            new City("2", "Giza",
                new Country("1", "Egypt"),
                [
                    new Area("7", "Mohandessien"),
                    new Area("8", "Dokki"),
                    new Area("9", "Giza Square"),
                    new Area("10", "Haram"),
                    new Area("11", "6th October")
                ]),

            new City("3", "Alexandria",
                new Country("1", "Egypt"),
                [
                    new Area("12", "San Stephano"),
                    new Area("13", "DownTown"),
                    new Area("14", "Sidi Beshr"),
                    new Area("15", "El Raml")
                ])
        ];
    }
}
