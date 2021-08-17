export class LinearMatrix {
    readonly count: number;

    readonly size: number;

    readonly elements: Array<number>;

    readonly total: number;

    constructor(count: number, size: number) {
        this.count = count;
        this.size = size;

        this.total = count * size;

        this.elements = [...Array(count * size)];
    }

    readElement(c: number, offset: number): number {
        let rtn = undefined;

        const i = (c * this.size) + offset;

        if( 0 <= i && i < this.total ) {
            rtn = this.elements[i];
        }
        else {
            throw `Index out of range: ${i}`;
        }

        return( rtn );
    }

    writeElement(c: number, offset: number, v: number): void {
        const i = (c * this.size) + offset;

        if( 0 <= i && i < this.total ) {
            this.elements[i] = v;
        }
        else {
            throw `Index out of range: ${i}`;
        }
    }

    section(n: number): Array<number> {
        const start = (n * this.size);

        let rtn = this.elements.slice(start, start + this.size + 1);

        return( rtn );
    }

    crossSection(n: number): Array<number> {
        let rtn = [...Array(this.count)];

        let i = 0;

        let offset = n;

        do {
            rtn[i] = this.elements[offset];

            offset += this.size;
        } while( ++i < this.count );

        return( rtn );
    }
}
