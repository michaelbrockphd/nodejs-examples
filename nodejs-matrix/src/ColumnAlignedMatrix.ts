import { ConcreteMatrixSegment } from "./ConcreteMatrixSegment";
import { LinearMatrix } from "./LinearMatrix";
import { Matrix } from "./Matrix";
import { MatrixSegment } from "./MatrixSegment";

export class ColumnAlignedMatrix implements Matrix {
    private mtx: LinearMatrix;

    constructor(rows: number, columns: number) {
        this.mtx = new LinearMatrix(columns, rows);
    }

    rows(): number {
        return( this.mtx.size );
    }

    columns(): number {
        return( this.mtx.count );
    }

    element(row: number, column: number): number{
        return( this.mtx.readElement(column, row) );
    }

    setElement(row: number, column: number, val: number): void {
        this.mtx.writeElement(column, row, val);
    }

    row(r: number): MatrixSegment {
        const segment = this.mtx.crossSection(r);

        const rtn = new ConcreteMatrixSegment(segment);

        return( rtn );
    }

    column(c: number): MatrixSegment {
        const segment = this.mtx.section(c);

        const rtn = new ConcreteMatrixSegment(segment);

        return( rtn );
    }
}
