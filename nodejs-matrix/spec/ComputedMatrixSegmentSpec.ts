import "jasmine"
import { ComputedMatrixSegment } from "../src/ComputedMatrixSegment";

describe("self test", () => {
    it("should match", () => {
        expect(true).toBe(true);
    });
} );

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
