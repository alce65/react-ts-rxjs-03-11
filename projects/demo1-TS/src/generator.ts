
export function* fibonacci(): Generator<number, void, number> {
    let values:  [number, number] = [0, 1];

    while (true) {
        const [current, next]: [number, number] = values;
        yield current;
        values = [next, current + next];
    }
}

const df = fibonacci();
console.log(df.next()); // 0
console.log(df.next().value); // 1
console.log(df.next().value); // 1
console.log(df.next().value); // 2
console.log(df.next().value); // 3
console.log(df.next().value); // 5
console.log(df.next().value); // 8



