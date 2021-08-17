var ConcreteMatrixSegment = /** @class */ (function () {
    function ConcreteMatrixSegment(elements) {
        this.elements = elements;
    }
    ConcreteMatrixSegment.prototype.length = function () {
        return this.elements.length;
    };
    ConcreteMatrixSegment.prototype.element = function (i) {
        return this.elements[i];
    };
    ConcreteMatrixSegment.prototype.setElement = function (i, v) {
        this.elements[i] = v;
    };
    return ConcreteMatrixSegment;
}());
export { ConcreteMatrixSegment };
