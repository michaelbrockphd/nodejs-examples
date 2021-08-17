import { RowAlignedMatrix } from "nodejs-matrix";
export function multiplySegments(a, b) {
    var rtn = 0;
    var i = a.length();
    while (-1 < --i) {
        rtn += (a.element(i) * b.element(i));
    }
    return (rtn);
}
export function multiplyMatrix(a, b) {
    var numR = a.rows();
    var numC = b.columns();
    var rtn = new RowAlignedMatrix(numR, numC);
    var idxR = 0;
    var idxC = 0;
    var currR;
    var currC;
    do {
        currR = a.row(idxR);
        idxC = 0;
        do {
            currC = b.column(idxC);
            rtn.setElement(idxR, idxC, multiplySegments(currR, currC));
        } while (idxC < numC);
    } while (idxR < numR);
    return (rtn);
}
