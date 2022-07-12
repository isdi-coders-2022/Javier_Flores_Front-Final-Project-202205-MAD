import axios from 'axios';
import { iItem } from '../../interfaces/interfaces';

const url = 'http://localhost:3900/item/';

export function getAllItems(): Promise<Array<iItem>> {
    return axios.get(url);
}
export function addItem(item: iItem): Promise<iItem> {
    return axios.post(url, item);
}
export function updateItem(item: iItem): Promise<iItem> {
    return axios.patch(url + item.id, item);
}
export function deleteItem(id: iItem['id']) {
    return axios.delete(url + id);
}
