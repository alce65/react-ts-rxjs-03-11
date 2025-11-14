import { of } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';
const higherOrder$ = of(1, 2, 3).pipe(map((value) => of(value * 10)));
// higherOrder$.subscribe((inner$) => {
//   console.log(inner$);
//   inner$.subscribe((value) => console.log(value));
// });

higherOrder$.pipe(
    
    // mergeAll(),
    concatAll()
    // switchAll()
    // exhaustAll()
).subscribe((value) => console.log(value));
