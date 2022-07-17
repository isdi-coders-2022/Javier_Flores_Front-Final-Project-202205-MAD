import { ReactElement } from 'react';

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

export interface iUserItem {}
export interface iMenuItem {
    path: string;
    label: string;
    page: ReactElement;
    title?: string;
}

export type aMenuItems = Array<iMenuItem>;

export interface iUserLogged {
    id?: string;
    _id?: string;
    token: string;
    user: iUser;
}
