import { ConcreteMatrixSegment } from "./ConcreteMatrixSegment";
import { LinearMatrix } from "./LinearMatrix";
var ColumnAlignedMatrix = /** @class */ (function () {
    function ColumnAlignedMatrix(rows, columns) {
        this.mtx = new LinearMatrix(columns, rows);
    }
    ColumnAlignedMatrix.prototype.rows = function () {
        return (this.mtx.size);
    };
    ColumnAlignedMatrix.prototype.columns = function () {
        return (this.mtx.count);
    };
    ColumnAlignedMatrix.prototype.element = function (row, column) {
        return (this.mtx.readElement(column, row));
    };
    ColumnAlignedMatrix.prototype.setElement = function (row, column, val) {
        this.mtx.writeElement(column, row, val);
    };
    ColumnAlignedMatrix.prototype.row = function (r) {
        var segment = this.mtx.crossSection(r);
        var rtn = new ConcreteMatrixSegment(segment);
        return (rtn);
    };
    ColumnAlignedMatrix.prototype.column = function (c) {
        var segment = this.mtx.section(c);
        var rtn = new ConcreteMatrixSegment(segment);
        return (rtn);
    };
    return ColumnAlignedMatrix;
}());
export { ColumnAlignedMatrix };
