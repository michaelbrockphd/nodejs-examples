import "jasmine"
import { ConcreteMatrixSegment } from "../src/ConcreteMatrixSegment";

describe("Construction test", () => {
    const cases = [
        { existing: [1] },
        { existing: [1, 2, 3, 4] },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }
    ];

    cases.forEach((c) => {
        const arr = c.existing;

        const len = arr.length;

        const testSubject = new ConcreteMatrixSegment(arr);

        it(`case should have a length of ${len}`, () => {
            expect(testSubject.length()).toBe(len);
        });
    } );
} );

describe("Invalid get element test", () => {
    const cases = [
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], getIndex: -1 },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], getIndex: -10 },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], getIndex: 10 },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], getIndex: 11 }
    ];

    cases.forEach((c) => {
        const arr = c.existing;
        const idx = c.getIndex;

        let action = () => {
            const testSubject = new ConcreteMatrixSegment(arr);

            const result = testSubject.element(idx);
        };

        it(`case should fail with invalid index: ${idx}`, () => {
            expect(action).toThrow();
        });
    } );
} );

describe("Invalid set element test", () => {
    const cases = [
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], value: 42, setIndex: -1 },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], value: 42, setIndex: -10 },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], value: 42, setIndex: 10 },
        { existing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], value: 42, setIndex: 11 }
    ];

    cases.forEach((c) => {
        const arr = c.existing;
        const val = c.value;
        const idx = c.setIndex;


        let action = () => {
            const testSubject = new ConcreteMatrixSegment(arr);

            const result = testSubject.setElement(idx, val);
        };

        it(`case should fail with invalid index: ${idx}`, () => {
            expect(action).toThrow();
        });
    } );
} );

describe("Get element test", () => {
    const existing = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const length = existing.length;

    const testSubject = new ConcreteMatrixSegment(existing);

    let i = 0;

    do {
        const iLocal = i;

        const expected = existing[iLocal];

        it(`case should return ${expected} for index ${iLocal}`, () => {
            expect(testSubject.element(iLocal)).toBe(expected);
        } );
    } while(++i < length);
});

describe("Set element test", () => {
    const existing = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const len = existing.length;

    const val = 42

    let i = 0;

    do {
        const iLocal = i;

        const testSubject = new ConcreteMatrixSegment(existing);

        testSubject.setElement(iLocal, val);

        it(`case should set ${val} for index ${iLocal}`, () => {
            expect(testSubject.element(iLocal)).toBe(val);
        } );
    } while(++i < len);
});

