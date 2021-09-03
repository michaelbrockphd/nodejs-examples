import "jasmine"
import { ComputedMatrixSegment } from "../src/ComputedMatrixSegment";

describe("Construction test", () => {
    const cases = [
        { length: 4, index: 2, value: 42 },
        { length: 10, index: 5, value: 42 },
        { length: 1, index: 0, value: 42 }
    ];

    cases.forEach((c) => {
        const testSubject = new ComputedMatrixSegment(c.length, c.index, c.value);

        it(`case should have a length of ${c.length}`, () => {
            expect(testSubject.length()).toBe(c.length);
        });
    } );
} );

describe("Invalid construction test", () => {
    const cases = [
        { length: 0, index: 2, value: 42 },
        { length: -1, index: 2, value: 42 },
        { length: -10, index: 2, value: 42 },
        { length: 10, index: -1, value: 42 },
        { length: 10, index: -10, value: 42 },
        { length: 10, index: 10, value: 42 },
        { length: 10, index: 11, value: 42 }
    ];

    cases.forEach((c) => {
        let action = () => {
            const testSubject = new ComputedMatrixSegment(c.length, c.index, c.value);
        };

        it(`case should fail with invalid parameters: length: ${c.length}, index: ${c.index}`, () => {
            expect(action).toThrow();
        });
    } );
} );

describe("Computed set element test", () => {
    const testSubject = new ComputedMatrixSegment(10, 4, 42);

    let action = () => {
        testSubject.setElement(1, 24);
    };

    it(`case should fail as computed segments cannot mutate`, () => {
        expect(action).toThrow();
    });
} );

describe("Invalid get element test", () => {
    const cases = [
        { length: 10, index: 2, value: 42, getIndex: -1 },
        { length: 10, index: 2, value: 42, getIndex: -10 },
        { length: 10, index: 2, value: 42, getIndex: 10 },
        { length: 10, index: 2, value: 42, getIndex: 11 }
    ];

    cases.forEach((c) => {
        let action = () => {
            const testSubject = new ComputedMatrixSegment(c.length, c.index, c.value);

            const result = testSubject.element(c.getIndex);
        };

        it(`case should fail with invalid index: ${c.getIndex}`, () => {
            expect(action).toThrow();
        });
    } );
} );

describe("Get element test", () => {
    const length = 10;
    const index = 4;
    const value = 42;

    const testSubject = new ComputedMatrixSegment(length, index, value);

    let i = 0;

    do {
        const iLocal = i;

        const expected = ( iLocal == index ? value : 0 );

        it(`case should return ${expected} for index ${iLocal}`, () => {
            expect(testSubject.element(iLocal)).toBe(expected);
        } );
    } while(++i < length);
});
