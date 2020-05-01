import Entity from "./entity";

export default class Tag extends Entity {

    constructor (id, title) {
        super(id);
        this.title = title;
    }

}
