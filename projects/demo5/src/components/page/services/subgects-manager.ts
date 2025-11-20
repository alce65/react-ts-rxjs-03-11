import { Observable, Subject } from "rxjs";

export class SubjectManager<T> {
    // Implementation of the SubjectManager service
    
    private subject$ = new Subject<T>();
    
    get getSubject(): Observable<T> {
        return this.subject$.asObservable();
    }

    set setSubject(value: T) {
        this.subject$.next(value);
    }
}   
