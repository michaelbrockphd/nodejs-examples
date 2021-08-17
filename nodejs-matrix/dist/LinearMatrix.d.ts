export declare class LinearMatrix {
    readonly count: number;
    readonly size: number;
    readonly elements: Array<number>;
    readonly total: number;
    constructor(count: number, size: number);
    readElement(c: number, offset: number): number;
    writeElement(c: number, offset: number, v: number): void;
    section(n: number): Array<number>;
    crossSection(n: number): Array<number>;
}
