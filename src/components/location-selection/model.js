import Country from "../../core/entities/country";
import City from "../../core/entities/city";
import Area from "../../core/entities/area";

export default class LocationSelectionModel {
    constructor() {
        this.location = null;
        this.cities = this.getCitites();
    }

    getCitites() {
        return [
            new City("1", "Cairo", 
                     new Country("1", "Egypt"),
                     [
                        new Area("1", "Heliopolis"),
                        new Area("2", "Zamalek"),
                        new Area("3", "DownTown"),
                        new Area("4", "Nasr City"),
                        new Area("5", "Maadi"),
                        new Area("6", "Shoubra"),
                     ]),

            new City("2", "Giza", 
            new Country("1", "Egypt"),
            [
               new Area("1", "Mohandessien"),
               new Area("2", "Dokki"),
               new Area("3", "Giza Square"),
               new Area("4", "Haram"),
               new Area("5", "6th October"),
            ]),

             new City("3", "Alexandria", 
             new Country("1", "Egypt"),
             [
                new Area("1", "San Stephano"),
                new Area("2", "DownTown"),
                new Area("3", "Sidi Beshr"),
                new Area("4", "El Raml"),
             ]),
        ];
    }
}