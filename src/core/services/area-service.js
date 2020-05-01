/* eslint-disable class-methods-use-this */
/* eslint-disable space-before-function-paren */
import Area from "../entities/area";

export default class AreaService {
    constructor () { }

    getById (id) {
        return this.get().find(a => a.id === id);
    }

    get() {
        return [
            new Area("1", "Heliopolis", 1),
            new Area("2", "Zamalek", 1),
            new Area("3", "DownTown", 1),
            new Area("4", "Nasr City", 1),
            new Area("5", "Maadi", 1),
            new Area("6", "Shoubra", 1),
            new Area("7", "Mohandessien", 2),
            new Area("8", "Dokki", 2),
            new Area("9", "Giza Square", 2),
            new Area("10", "Haram", 2),
            new Area("11", "6th October", 2),
            new Area("12", "San Stephano", 3),
            new Area("13", "DownTown", 3),
            new Area("14", "Sidi Beshr", 3),
            new Area("15", "El Raml", 3),
        ];
    }
}
