import { Matrix } from "./Matrix";
import { MatrixSegment } from "./MatrixSegment";
export declare class ColumnAlignedMatrix implements Matrix {
    private mtx;
    constructor(rows: number, columns: number);
    rows(): number;
    columns(): number;
    element(row: number, column: number): number;
    setElement(row: number, column: number, val: number): void;
    row(r: number): MatrixSegment;
    column(c: number): MatrixSegment;
}
