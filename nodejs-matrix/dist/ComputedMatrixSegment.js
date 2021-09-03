var ComputedMatrixSegment = /** @class */ (function () {
    function ComputedMatrixSegment(l, i, v) {
        if (l < 1) {
            throw "Cannot have an lenght less than 1: provided length, " + l;
        }
        if (i < 0 || l <= i) {
            throw "Index out of range: must be between 0 and " + (l - 1) + ", inclusive.";
        }
        this.len = l;
        this.index = i;
        this.value = v;
    }
    ComputedMatrixSegment.prototype.length = function () {
        return this.len;
    };
    ComputedMatrixSegment.prototype.element = function (i) {
        if (i < 0 || this.len <= i) {
            throw "Index out of range: must be between 0 and " + (this.len - 1) + ", inclusive.";
        }
        var rtn = (i === this.index ? this.value : 0);
        return (rtn);
    };
    ComputedMatrixSegment.prototype.setElement = function (i, v) {
        throw "Cannot mutate a computed matrix segment.";
    };
    return ComputedMatrixSegment;
}());
export { ComputedMatrixSegment };
