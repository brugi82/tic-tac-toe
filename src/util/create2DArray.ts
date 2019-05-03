export function create2DArray(length: number) {
    const rows = Array(length);
    for (let index = 0; index < length; index++) {
        rows[index] = Array(length);
    }

    return rows;
}

export function clone2DArray(array: any[]) {
    const clone = array.map(row => row.slice());
    return clone;
}