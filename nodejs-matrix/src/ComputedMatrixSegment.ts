import { MatrixSegment } from './MatrixSegment'

export class ComputedMatrixSegment implements MatrixSegment {
    private readonly len;

    private readonly index;

    private readonly value;

    constructor(l: number, i: number, v: number) {
        if( l <  1 ) {
            throw `Cannot have an lenght less than 1: provided length, ${l}`;
        }

        if( i < 0 || l <= i ) {
            throw `Index out of range: must be between 0 and ${l - 1}, inclusive.`;
        }

        this.len = l;

        this.index = i;

        this.value = v;
    }

    length(): number {
        return this.len;
    }

    element(i: number) {
        if( i < 0 || this.len <= i ) {
            throw `Index out of range: must be between 0 and ${this.len - 1}, inclusive.`;
        }

        let rtn = ( i === this.index ? this.value : 0 );

        return( rtn );
    }

    setElement(i: number, v: number): void {
        throw "Cannot mutate a computed matrix segment.";
    }
}
