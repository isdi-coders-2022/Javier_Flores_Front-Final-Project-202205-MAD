import { iUserLogged } from '../../interfaces/interfaces';

export class LocalStorage {
    constructor(public item: iUserLogged) {}

    setItem() {
        localStorage.setItem('login', JSON.stringify(this.item));
    }

    getItem() {
        const item = JSON.parse(localStorage.getItem('login') as string);
        return item;
    }

    removeItem() {
        localStorage.removeItem('login');
    }
}
