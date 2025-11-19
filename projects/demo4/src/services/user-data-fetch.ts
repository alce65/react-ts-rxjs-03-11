import type { User } from "@/types/user";
import { getData } from "./data-fetch";
import { Observable } from "rxjs";

const url = 'http://localhost:4000/users';
// 'https://jsonplaceholder.typicode.com/users';

export const getUserData = (): Observable<User[]> => getData<User[]>(url)();

export const getUserById = (id: string): Observable<User> => {
    const url_ID = `${url}/${id}`;
    return getData<User>(url_ID)();   
}
