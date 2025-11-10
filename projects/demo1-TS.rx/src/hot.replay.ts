// Observables (hot) con RxJS
// ===========================
// Subjects, BehaviorSubjects, ReplaySubjects, AsyncSubjects

import { ReplaySubject } from 'rxjs';

console.log('Replay Subject');

const subject$ = new ReplaySubject<number>(0);

subject$.next(1);
subject$.next(2);
console.log('Suscripción 1');

export const subscription1 = subject$.subscribe({
    next: (value): void =>
        console.log(`Subscription 1 Received value: ${value}`),
    error: (err): void => console.error(`Error: ${err}`),
    complete: (): void => console.log('Completed'),
});

subject$.next(3);
subject$.next(4);
console.log('Suscripción 2');

export const subscription2 = subject$.subscribe({
    next: (value): void =>
        console.log(`Subscription 2 Received value: ${value}`),
    error: (err): void => console.error(`Error: ${err}`),
    complete: (): void => console.log('Completed'),
});

subject$.next(5);
subject$.next(6);
