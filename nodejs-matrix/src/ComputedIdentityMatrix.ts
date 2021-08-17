import { ComputedMatrixSegment } from "./ComputedMatrixSegment";
import { Matrix } from "./Matrix";
import { MatrixSegment } from "./MatrixSegment";

export class ComputedIdentityMatrix implements Matrix {
    private readonly n: number;

    private readonly val: number;

    constructor(n: number, v: number) {
        this.n = n;
        this.val = v;
    }

    rows(): number {
        return this.n;
    }
    
    columns(): number {
        return this.n;
    }

    element(row: number, column: number): number {
        if(
               row < 0 || this.n <= row
            || column < 0 || this.n <= column
        ) {
            throw `Index out of range: [${row}, ${column}]`;
        }

        const rtn = ( row === column ? this.val : 0 );

        return( rtn );
    }

    setElement(row: number, column: number, value: number): void {
        throw "Cannot mutate computed matrix."
    }

    row(r: number): MatrixSegment {
        const rtn = new ComputedMatrixSegment(this.n, r, this.val);

        return( rtn );
    }

    column(c: number): MatrixSegment {
        const rtn = new ComputedMatrixSegment(this.n, c, this.val);

        return( rtn );
    }
}
