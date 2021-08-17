import { ComputedMatrixSegment } from "./ComputedMatrixSegment";
var ComputedIdentityMatrix = /** @class */ (function () {
    function ComputedIdentityMatrix(n, v) {
        this.n = n;
        this.val = v;
    }
    ComputedIdentityMatrix.prototype.rows = function () {
        return this.n;
    };
    ComputedIdentityMatrix.prototype.columns = function () {
        return this.n;
    };
    ComputedIdentityMatrix.prototype.element = function (row, column) {
        if (row < 0 || this.n <= row
            || column < 0 || this.n <= column) {
            throw "Index out of range: [" + row + ", " + column + "]";
        }
        var rtn = (row === column ? this.val : 0);
        return (rtn);
    };
    ComputedIdentityMatrix.prototype.setElement = function (row, column, value) {
        throw "Cannot mutate computed matrix.";
    };
    ComputedIdentityMatrix.prototype.row = function (r) {
        var rtn = new ComputedMatrixSegment(this.n, r, this.val);
        return (rtn);
    };
    ComputedIdentityMatrix.prototype.column = function (c) {
        var rtn = new ComputedMatrixSegment(this.n, c, this.val);
        return (rtn);
    };
    return ComputedIdentityMatrix;
}());
export { ComputedIdentityMatrix };
