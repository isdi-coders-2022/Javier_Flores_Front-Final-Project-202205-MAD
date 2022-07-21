import { iItem } from '../../interfaces/interfaces';

export class ItemsRepository {
    url: string;
    constructor() {
        this.url = 'http://localhost:3900/item/';
    }

    getAllItems(): Promise<Array<iItem>> {
        return fetch(this.url).then((response) => response.json());
    }
    getItem(id: iItem['id']): Promise<iItem> {
        return fetch(this.url + id).then((response) => response.json());
    }
    addItem(item: iItem): Promise<iItem> {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        }).then((response) => response.json());
    }
    updateItem(item: iItem): Promise<iItem> {
        return fetch(this.url + item.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        }).then((response) => response.json());
    }
    //Method delete not used yet:
    // deleteItem(id: iItem['id']) {
    //     return fetch(this.url + id, {
    //         method: 'DELETE',
    //     });
}
