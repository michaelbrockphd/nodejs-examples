import { MatrixSegment } from "./MatrixSegment";
export interface Matrix {
    rows(): number;
    columns(): number;
    element(row: number, column: number): number;
    setElement(row: number, column: number, value: number): void;
    row(r: number): MatrixSegment;
    column(c: number): MatrixSegment;
}
