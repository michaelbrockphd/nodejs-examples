import { MatrixSegment } from './MatrixSegment';
export declare class ComputedMatrixSegment implements MatrixSegment {
    private readonly len;
    private readonly index;
    private readonly value;
    constructor(l: number, i: number, v: number);
    length(): number;
    element(i: number): number;
    setElement(i: number, v: number): void;
}
