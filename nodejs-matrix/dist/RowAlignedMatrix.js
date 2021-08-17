import { ConcreteMatrixSegment } from "./ConcreteMatrixSegment";
import { LinearMatrix } from "./LinearMatrix";
var RowAlignedMatrix = /** @class */ (function () {
    function RowAlignedMatrix(rows, columns) {
        this.mtx = new LinearMatrix(rows, columns);
    }
    RowAlignedMatrix.prototype.rows = function () {
        return (this.mtx.count);
    };
    RowAlignedMatrix.prototype.columns = function () {
        return (this.mtx.size);
    };
    RowAlignedMatrix.prototype.element = function (row, column) {
        return (this.mtx.readElement(row, column));
    };
    RowAlignedMatrix.prototype.setElement = function (row, column, val) {
        this.mtx.writeElement(row, column, val);
    };
    RowAlignedMatrix.prototype.row = function (r) {
        var segment = this.mtx.section(r);
        var rtn = new ConcreteMatrixSegment(segment);
        return (rtn);
    };
    RowAlignedMatrix.prototype.column = function (c) {
        var segment = this.mtx.crossSection(c);
        var rtn = new ConcreteMatrixSegment(segment);
        return (rtn);
    };
    return RowAlignedMatrix;
}());
export { RowAlignedMatrix };
