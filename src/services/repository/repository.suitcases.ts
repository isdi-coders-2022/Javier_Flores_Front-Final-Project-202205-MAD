import axios from 'axios';
import { iSuitcase } from '../../interfaces/interfaces';

export class UsersRepository {
    url: string;
    constructor() {
        this.url = 'http://localhost:3900/suitcase/';
    }

    getAllSuitcases(): Promise<Array<iSuitcase>> {
        return axios.get(this.url);
    }
    addSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
        return axios.post(this.url, suitcase);
    }
    updateSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
        return axios.patch(this.url + suitcase.id, suitcase);
    }
    deleteSuitcase(id: iSuitcase['id']) {
        return axios.delete(this.url + id);
    }
}
