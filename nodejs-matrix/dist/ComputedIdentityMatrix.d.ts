import { Matrix } from "./Matrix";
import { MatrixSegment } from "./MatrixSegment";
export declare class ComputedIdentityMatrix implements Matrix {
    private readonly n;
    private readonly val;
    constructor(n: number, v: number);
    rows(): number;
    columns(): number;
    element(row: number, column: number): number;
    setElement(row: number, column: number, value: number): void;
    row(r: number): MatrixSegment;
    column(c: number): MatrixSegment;
}
