/* istanbul ignore file */

export interface iUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    suitcases?: iSuitcase[];
}

export interface iSuitcase {
    id?: string;
    _id?: string;
    limitWeight: number;
    destination: string;
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
    _id?: string;
    name: string;
    weight: number;
    destination: string;
}

export interface iUserItems {
    item: iItem;
    quantity: number;
    isChecked: boolean;
}
export interface iUserLogged {
    id?: string;
    _id?: string;
    token: string;
    user: iUser;
}
