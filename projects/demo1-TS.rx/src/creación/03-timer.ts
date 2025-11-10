import { interval, timer } from "rxjs";

const startingTime = Date.now();
const tick$ = interval(1000);
const subscription = tick$.subscribe(() =>
  console.log("Interval", Date.now() - startingTime),
);
setTimeout(() => subscription.unsubscribe(), 6000);

const tickOne$ = timer(3000);
tickOne$.subscribe(() => console.log("Timer", Date.now() - startingTime));
