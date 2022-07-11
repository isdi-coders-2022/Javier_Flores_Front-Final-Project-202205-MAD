import axios from 'axios';
import { iUser } from '../interfaces/interfaces';

const url = 'http://localhost:3900/user/';

export function getAllUsers(): Promise<Array<iUser>> {
    return axios.get(url);
}
export function addUser(note: iUser): Promise<iUser> {
    return axios.post(url, note);
}
export function updateNote(note: iUser): Promise<iUser> {
    return axios.put(url + note.id, note);
}
export function deleteNote(id: iUser['id']) {
    return axios.delete(url + id);
}
