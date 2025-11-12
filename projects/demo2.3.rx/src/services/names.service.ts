import { delay, Observable, of } from 'rxjs';
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

export const getNames = (): Observable<string[]> => {
    return of(names).pipe(delay(2000));
};
