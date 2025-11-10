// Observables (cold) con RxJS
// ===========================

import { Observable, Subscription } from 'rxjs';

const source$ = new Observable<number>((observer) => {
    console.log('Soy un observable');
    let count = 0;
    const intervalId = setInterval(() => {
        console.log('Soy un observable', count);

        if (count === 3) {
            observer.error('Error: count reached 3');
            return;
        }
        if (count > 5) {
            observer.complete();
            return;
        }

        observer.next(count++);
    }, 500);

    // Cleanup function
    return (): void => {
        clearInterval(intervalId);
    };
});

// const observer = {
//     next: (value): void => console.log(`Received value: ${value}`),
//     error: (err): void => console.error(`Error: ${err}`),
//     complete: (): void => console.log('Completed'),
// };

const subscription = source$.subscribe({
    next: (value): void =>
        console.log(`Subscription 1 Received value: ${value}`),
    error: (err): void => console.error(`Error: ${err}`),
    complete: (): void => console.log('Completed'),
});

let subscription2: Subscription;
setTimeout(() => {
    subscription2 = source$.subscribe({
        next: (value): void =>
            console.log(`Subscription 2 Received value: ${value}`),
        error: (err): void => console.error(`Error: ${err}`),
        complete: (): void => console.log('Completed'),
    });
}, 2000);

setTimeout(() => {
    console.log('Unsubscribing from subscription 1');
    subscription.unsubscribe();
    console.log('Unsubscribing from subscription 2');
    subscription2.unsubscribe();
}, 7000);

// const p= new Promise((resolve, rejects) => {
//     setTimeout(() => {

//         const n = Math.random();
//         if (n > 0.5) {
//             resolve(n);
//             return;
//         }
//         console.log('Unsubscribed from observable');
//         rejects('Promise rejected: Random number less than 0.5');
//     }, 5000);
// })

// p.then(
//     value => console.log(`Promise resolved with value: ${value}`),
// ).catch(
//     error => console.error(`Promise rejected with error: ${error}`)
// ).finally(() => {
//     console.log('Promise completed');
// });
