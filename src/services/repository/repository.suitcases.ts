import { iSuitcase } from '../../interfaces/interfaces';

export class SuitcasesRepository {
    url: string;
    constructor() {
        this.url = 'http://localhost:3900/suitcase/';
    }

    getSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
        return fetch(this.url + `/${suitcase.id}`).then((resp) => resp.json());
    }

    addSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(suitcase),
        }).then((res) => {
            return res.json();
        });
    }
    updateSuitcase(
        suitcase: Partial<iSuitcase>,
        _id: String
    ): Promise<iSuitcase> {
        return fetch(this.url + _id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(suitcase),
        }).then((res) => {
            return res.json();
        });
    }
    deleteSuitcase(id: iSuitcase['id']) {
        return fetch(this.url + id, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }
}
