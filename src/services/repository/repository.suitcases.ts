import { iSuitcase } from '../../interfaces/interfaces';

export class SuitcasesRepository {
    url: string;
    constructor() {
        this.url = 'http://localhost:3900/suitcase/';
    }

    // getAllSuitcases(): Promise<Array<iSuitcase>> {
    //     return fetch(this.url).then((res) => {
    //         return res.json();
    //     });
    // }
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
    updateSuitcase(suitcase: iSuitcase): Promise<iSuitcase> {
        return fetch(this.url + suitcase.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(suitcase),
        }).then((res) => {
            return res.json();
        });
    }
    deleteSuitcase(id: iSuitcase['id']) {
        return fetch(this.url + id, {
            method: 'DELETE',
        });
    }
}
