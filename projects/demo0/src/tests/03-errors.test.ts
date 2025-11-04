const throwError = (): void => {
    throw new Error('Error');
};

function makePossibleError(n: number): void {
    if (n > 1) {
        throw new Error('Error');
    }
}
describe('Matchers de errores', () => {
    test('toThrow', () => {
        expect(throwError).toThrow();
    });
    test('toThrow', () => {
        expect(() => makePossibleError(2)).toThrow();
    });
});
