import { Observable, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const url = 'https://api.example.com/data';

// https://jsonplaceholder.typicode.com/todos/

export const fetchData = () : Observable<Response> => {
    return fromFetch(url).pipe(
        tap((response) => console.log(response))
    );
}
