import { Observable, Subject } from 'rxjs';

export const subjectManager = <T>(): {
    getObservable: () => Observable<T>;
    setSubject: (value: T) => void;
} => {
    const subject$ = new Subject<T>();

    const getObservable = (): Observable<T> => {
        return subject$.asObservable();
    };

    const setSubject = (value: T): void => {
        subject$.next(value);
    };
    return {
        getObservable,
        setSubject,
    };
};
