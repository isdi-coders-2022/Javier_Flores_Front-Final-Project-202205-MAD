export enum destination {
    'beach' = 'beach',
    'campsite' = 'campsite',
    'mountain' = 'mountain',
    'rainy' = 'rainy',
}

export interface iUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    suitcases?: iSuitcase[];
}

export interface iSuitcase {
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
export interface iItem {
    id?: string;
    name: string;
    weight: number;
    destination: destination;
}
