var ComputedMatrixSegment = /** @class */ (function () {
    function ComputedMatrixSegment(l, i, v) {
        this.len = l;
        this.index = i;
        this.value = v;
    }
    ComputedMatrixSegment.prototype.length = function () {
        return this.len;
    };
    ComputedMatrixSegment.prototype.element = function (i) {
        var rtn = (i === this.index ? this.value : 0);
        return (rtn);
    };
    ComputedMatrixSegment.prototype.setElement = function (i, v) {
        throw "Cannot mutate a computed matrix segment.";
    };
    return ComputedMatrixSegment;
}());
export { ComputedMatrixSegment };
