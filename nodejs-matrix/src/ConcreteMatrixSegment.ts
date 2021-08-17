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
        return this.elements[i];
    }

    setElement(i: number, v: number): void {
        this.elements[i] = v;
    }
}
