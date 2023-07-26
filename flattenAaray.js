function flattenArray(arr) {
    const result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            // Recursively flatten the nested array
            result.push(...flattenArray(item));
        } else {
            // Add non-array element to the flat array
            result.push(item);
        }
    }

    return result;
}
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
