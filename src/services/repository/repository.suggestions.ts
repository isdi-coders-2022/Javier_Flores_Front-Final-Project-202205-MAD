import { destination, iItem } from '../../interfaces/interfaces';
export class SuggestionsRepository {
    url: string;
    constructor() {
        this.url = `http://localhost:3900/suggestion/?destination=`;
    }
    getAllSuggestions(destination: string) {
        return fetch(this.url + destination).then((res) => {
            return res.json();
        });
    }
}
