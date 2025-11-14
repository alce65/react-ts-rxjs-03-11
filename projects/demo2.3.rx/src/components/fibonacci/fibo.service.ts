export function* fibonacci(): Generator<number, void, number> {
    let values = [0, 1];

    while (true) {
        const [current, next] = values;
        yield current;
        values = [next, current + next];
    }
}
