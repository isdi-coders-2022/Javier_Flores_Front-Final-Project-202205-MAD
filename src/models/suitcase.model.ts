import { destination, iSuitcase } from '../interfaces/interfaces';

export class Suitcase implements iSuitcase {
    id?: string;
    destination: destination;
    owner: string;
    items?: [
        {
            item: iItem;
            quantity: number;
            isChecked: boolean;
        }
    ];
    isWeightOk: boolean;
}
