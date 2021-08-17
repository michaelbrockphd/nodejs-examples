import { MatrixSegment } from './MatrixSegment';
export declare class ConcreteMatrixSegment implements MatrixSegment {
    private elements;
    constructor(elements: Array<number>);
    length(): number;
    element(i: number): number;
    setElement(i: number, v: number): void;
}
