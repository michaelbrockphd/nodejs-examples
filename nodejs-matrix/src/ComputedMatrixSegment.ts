import { MatrixSegment } from './MatrixSegment'

export class ComputedMatrixSegment implements MatrixSegment {
    private readonly len;

    private readonly index;

    private readonly value;

    constructor(l: number, i: number, v: number) {
        this.len = l;

        this.index = i;

        this.value = v;
    }

    length(): number {
        return this.len;
    }

    element(i: number) {
        let rtn = ( i === this.index ? this.value : 0 );

        return( rtn );
    }

    setElement(i: number, v: number): void {
        throw "Cannot mutate a computed matrix segment.";
    }
}
