import { iSuitcase, iUser } from '../interfaces/interfaces';

export class User implements iUser {
    suitcases?: iSuitcase[] | undefined;
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string
    ) {
        this.suitcases = [];
    }
}
