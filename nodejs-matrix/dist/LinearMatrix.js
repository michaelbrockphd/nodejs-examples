var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var LinearMatrix = /** @class */ (function () {
    function LinearMatrix(count, size) {
        this.count = count;
        this.size = size;
        this.total = count * size;
        this.elements = __spreadArray([], Array(count * size));
    }
    LinearMatrix.prototype.readElement = function (c, offset) {
        var rtn = undefined;
        var i = (c * this.size) + offset;
        if (0 <= i && i < this.total) {
            rtn = this.elements[i];
        }
        else {
            throw "Index out of range: " + i;
        }
        return (rtn);
    };
    LinearMatrix.prototype.writeElement = function (c, offset, v) {
        var i = (c * this.size) + offset;
        if (0 <= i && i < this.total) {
            this.elements[i] = v;
        }
        else {
            throw "Index out of range: " + i;
        }
    };
    LinearMatrix.prototype.section = function (n) {
        var start = (n * this.size);
        var rtn = this.elements.slice(start, start + this.size + 1);
        return (rtn);
    };
    LinearMatrix.prototype.crossSection = function (n) {
        var rtn = __spreadArray([], Array(this.count));
        var i = 0;
        var offset = n;
        do {
            rtn[i] = this.elements[offset];
            offset += this.size;
        } while (++i < this.count);
        return (rtn);
    };
    return LinearMatrix;
}());
export { LinearMatrix };
