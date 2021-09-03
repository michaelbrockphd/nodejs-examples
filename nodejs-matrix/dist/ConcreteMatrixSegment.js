var ConcreteMatrixSegment = /** @class */ (function () {
    function ConcreteMatrixSegment(elements) {
        this.elements = elements;
    }
    ConcreteMatrixSegment.prototype.length = function () {
        return this.elements.length;
    };
    ConcreteMatrixSegment.prototype.element = function (i) {
        var len = this.elements.length;
        if (i < 0 || len <= i) {
            throw "Index out of range: must be between 0 and " + len + ", inclusive.";
        }
        return this.elements[i];
    };
    ConcreteMatrixSegment.prototype.setElement = function (i, v) {
        var len = this.elements.length;
        if (i < 0 || len <= i) {
            throw "Index out of range: must be between 0 and " + len + ", inclusive.";
        }
        this.elements[i] = v;
    };
    return ConcreteMatrixSegment;
}());
export { ConcreteMatrixSegment };
