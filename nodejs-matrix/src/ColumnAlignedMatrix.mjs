import LinearMatrix from "./LinearMatrix.mjs"

class ColumnAlignedMatrix {
    #mtx = null;

    constructor(count, size) {
        this.#mtx = new LinearMatrix(count, size);
    }

    get rows() {
        return( this.#mtx.size );
    }

    get columns() {
        return( this.#mtx.count );
    }

    get element(row, column) {
        return( this.#mtx.readElement(column, row) );
    }

    set element(row, column, val) {
        this.#mtx.writeElement(column, row, val);
    }
}
