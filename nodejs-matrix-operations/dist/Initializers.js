export function initializeIdentityMatrix(m, v) {
    var numRows = m.rows();
    var i = 0;
    do {
        m.setElement(i, i, v);
    } while (++i < numRows);
}
export function initializeMatrix(m) {
    var numRows = m.rows();
    var numCols = m.columns();
    var v = -1;
    var r = 0;
    var c = 0;
    do {
        do {
            m.setElement(r, c, ++v);
        } while (++c < numCols);
    } while (++r < numRows);
}
