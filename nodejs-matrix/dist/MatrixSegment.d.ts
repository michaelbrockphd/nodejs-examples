export interface MatrixSegment {
    length(): number;
    element(i: number): number;
    setElement(i: number, v: number): void;
}
