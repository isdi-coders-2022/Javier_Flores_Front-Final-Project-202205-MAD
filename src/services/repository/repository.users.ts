import axios from 'axios';
import { iUser } from '../../interfaces/interfaces';

const url = 'http://localhost:3900/user/';

export function registerUser(user: iUser): Promise<iUser> {
    return axios.post(url, user);
}
export function loginUser(user: Partial<iUser>): Promise<iUser> {
    return axios.post(url + 'login', user);
}

export function deleteUser(id: iUser['id']) {
    return axios.delete(url + id);
}
