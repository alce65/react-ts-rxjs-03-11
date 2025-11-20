import { Observable } from 'rxjs';

export interface Repository<T extends { id: string | number }, DTO> {
    getAll(): Observable<T[]>;
    getById(id: T['id']): Observable<T>;
    create(item: DTO): Observable<T>;
    update(id: T['id'], item: Partial<Omit<T, 'id'>>): Observable<T>;
    delete(id: T['id']): Observable<void>;
}
