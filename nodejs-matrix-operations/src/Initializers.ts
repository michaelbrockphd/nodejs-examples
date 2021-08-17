import { Matrix } from "nodejs-matrix";

export function initializeIdentityMatrix(m: Matrix, v: number): void {
    const numRows = m.rows();

    let i = 0;

    do {
        m.setElement(i, i, v);
    } while( ++i < numRows );
}

export function initializeMatrix(m: Matrix): void {
    const numRows = m.rows();

    const numCols = m.columns();

    let v = -1;

    let r = 0;

    let c = 0;

    do {
        do {
            m.setElement(r, c, ++v);
        } while( ++c < numCols );
    } while( ++r < numRows );
}
