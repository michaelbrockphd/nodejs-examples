class LinearMatrix {
    #count = 0;
    #size = 0;

    #elements = [];

    #total = 0;

    constructor(count, size) {
        this.#count = count;
        this.#size = size;

        this.#total = count * size;

        this.#elements = [...Array(count * size)];
    }

    readElement(c, offset) {
        let rtn = undefined;

        const i = (c * this.#size) + offset;

        if( 0 <= i && i < this.#total ) {
            rtn = this.#elements[i];
        }
        else {
            throw `Index out of range: ${i}`;
        }

        return( rtn );
    }

    writeElement(c, offset, v) {
        const i = (c * this.#size) + offset;

        if( 0 <= i && i < this.#total ) {
            this.#elements[i] = v;
        }
        else {
            throw `Index out of range: ${i}`;
        }
    }

    section(n) {
        const start = (n * this.#size);

        let rtn = this.#elements.slice(start, start + this.#size + 1);

        return( rtn );
    }

    crossSection(n) {
        let rtn = [...Array(this.#count)];

        let i = 0;

        let offset = n;

        do {
            rtn[i] = this.#elements[offset];

            offset += this.#size;
        } while( ++i < this.#count );

        return( rtn );
    }
}
