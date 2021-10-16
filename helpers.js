/**
 * 
 * @param {[]} arr receives a nested array
 * @returns flatten array
 * @example [1, [1, 2, [3], 4, [5, [6]]]] => [1, 2, 3, 4, 5, 6]
 */
export function flattenArray(arr) {
    const flatArray = [];
    
    ([] || arr).forEach(element => {
        if (Array.isArray(element)) {
            flatArray.push(...flattenArray(element));
        } else {
            flatArray.push(element);
        }
    });
    
    return flatArray;
}
