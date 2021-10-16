/**
 * 
 * @param {[]} nestedArray receives a nested array
 * @returns flatten array
 * @example [1, [2, 3, [4], 5, [6, [7]]]] => [1, 2, 3, 4, 5, 6]
 */
export function flattenArray(nestedArray) {
    const flatArray = [];
    
    ([] || nestedArray).forEach(element => {
        if (Array.isArray(element)) {
            flatArray.push(...flattenArray(element));
        } else {
            flatArray.push(element);
        }
    });
    
    return flatArray;
}
