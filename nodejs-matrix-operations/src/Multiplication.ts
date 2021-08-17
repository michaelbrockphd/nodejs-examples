import { Matrix, RowAlignedMatrix } from "nodejs-matrix";
import { MatrixSegment } from "nodejs-matrix";

export function multiplySegments(a: MatrixSegment, b: MatrixSegment) {
    let rtn = 0;

    let i: number = a.length();

    while( -1 < --i ) {
        rtn += (a.element(i) * b.element(i));
    }

    return( rtn );
}

export function multiplyMatrix(a: Matrix, b: Matrix): Matrix {
    const numR: number = a.rows();
    const numC: number = b.columns();

    let rtn: Matrix = new RowAlignedMatrix(numR, numC);

    let idxR = 0;
    let idxC = 0;

    let currR: MatrixSegment;
    let currC: MatrixSegment;

    do {
        currR = a.row(idxR);

        idxC = 0;

        do {
            currC = b.column(idxC);

            rtn.setElement(idxR, idxC, multiplySegments(currR, currC));
        } while( idxC < numC );
    } while( idxR < numR );

    return( rtn );
}
