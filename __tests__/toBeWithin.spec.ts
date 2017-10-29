import {toBeWithin} from '../src/toBeWithin';

expect.extend({toBeWithin});

describe('.toBeWithin()', () => {
    [
        [1, 2, 3],
        [-Infinity, 1, Infinity],
        [Number.MIN_VALUE, 1, Number.MAX_VALUE],
        [0x11, 0x21, 0x22],
        [0b11, 0b111, 0b1111],
        [0o11, 0o21, 0o22],
        [0.1, 0.19, 0.2],
    ].forEach(([small, within, big]) => {
        it(`{pass: true} expect(${within}).toBeWithin(${small}, ${big})`, () => {
            expect(small).toBeWithin(small, big);
        });

        it(`{pass: false} expect(${big}).toBeWithin(${small}, ${within})`, () => {
            expect(big).not.toBeWithin(small, within);
        });

        it(`throws: [${small}, ${within}, ${big}]`, () => {
            expect(() =>
                expect(within).not.toBeWithin(small, big),
            ).toThrowErrorMatchingSnapshot();

            expect(() =>
                expect(big).toBeWithin(small, within),
            ).toThrowErrorMatchingSnapshot();
        });
    });

    [
        [1, 1, 1],
        [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE],
        [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE],
        [Infinity, Infinity, Infinity],
        [-Infinity, -Infinity, -Infinity]
    ].forEach(([n1, n2, n3]) => {
        test(`equal numbers: [${n1}, ${n2}, ${n3}]`, () => {
            expect(n2).toBeWithin(n1, n3);

            expect(() =>
                expect(n2).not.toBeWithin(n1, n3),
            ).toThrowErrorMatchingSnapshot();

            expect(() =>
                expect(n2).not.toBeWithin(n1, n3),
            ).toThrowErrorMatchingSnapshot();
        });
    });
});
