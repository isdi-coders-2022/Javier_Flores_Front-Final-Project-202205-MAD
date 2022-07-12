import axios from 'axios';
import { iSuitcase } from '../../interfaces/interfaces';

const url = 'http://localhost:3900/suitcase/';

export function getAllSuitcases(): Promise<Array<iSuitcase>> {
    return axios.get(url);
}
export function addSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
    return axios.post(url, suitcase);
}
export function updateSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
    return axios.patch(url + suitcase.id, suitcase);
}
export function deleteSuitcase(id: iSuitcase['id']) {
    return axios.delete(url + id);
}
