import { destination, iItem } from '../interfaces/interfaces';

export class Item implements iItem {
    id?: string;
    name: string;
    weight: number;
    destination: destination;
    constructor(name: string, weight: number, destination: destination) {
        this.name = name;
        this.weight = weight;
        this.destination = destination;
    }
}
