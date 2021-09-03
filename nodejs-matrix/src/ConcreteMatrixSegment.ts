import { MatrixSegment } from './MatrixSegment'

export class ConcreteMatrixSegment implements MatrixSegment {
    private elements: Array<number>;

    constructor(elements: Array<number>) {
        this.elements = elements;
    }

    length(): number {
        return this.elements.length;
    }

    element(i: number): number {
        const len = this.elements.length;

        if( i < 0 || len <= i ) {
            throw `Index out of range: must be between 0 and ${len}, inclusive.`;
        }

        return this.elements[i];
    }

    setElement(i: number, v: number): void {
        const len = this.elements.length;

        if( i < 0 || len <= i ) {
            throw `Index out of range: must be between 0 and ${len}, inclusive.`;
        }

        this.elements[i] = v;
    }
}
