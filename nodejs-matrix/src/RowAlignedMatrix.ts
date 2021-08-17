import { ConcreteMatrixSegment } from "./ConcreteMatrixSegment"
import { LinearMatrix } from "./LinearMatrix";
import { Matrix } from "./Matrix";
import { MatrixSegment } from "./MatrixSegment";

export class RowAlignedMatrix implements Matrix {
    private mtx: LinearMatrix;

    constructor(rows: number, columns: number) {
        this.mtx = new LinearMatrix(rows, columns);
    }

    rows(): number {
        return( this.mtx.count );
    }

    columns(): number {
        return( this.mtx.size );
    }

    element(row: number, column: number): number {
        return( this.mtx.readElement(row, column) );
    }

    setElement(row: number, column: number, val: number): void {
        this.mtx.writeElement(row, column, val);
    }

    row(r: number): MatrixSegment {
        const segment = this.mtx.section(r);

        const rtn = new ConcreteMatrixSegment(segment);

        return( rtn );
    }

    column(c: number): MatrixSegment {
        const segment = this.mtx.crossSection(c);

        const rtn = new ConcreteMatrixSegment(segment);

        return( rtn );
    }
}
