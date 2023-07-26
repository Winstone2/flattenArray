# flattenArray
To flatten a nested array, we can use recursion to iterate through each element of the array. If an element is itself an array, we recursively call the function to flatten it. Otherwise, we add the element to the resulting flat array.
Thought Process:

    The function flattenArray takes a nested array arr as input.
    We create an empty array result to store the flattened elements.
    We use a for...of loop to iterate through each element of the input array arr.
    If the current element is itself an array (i.e., Array.isArray(item) returns true), we recursively call the flattenArray function on that nested array to flatten it.
    If the current element is not an array, it is a non-nested element, and we add it directly to the result array.
    We use the spread operator (...) to add the elements of the nested array to the result array.
    After iterating through all elements of the input array, we return the result array, which contains all elements flattened into a single array.

Edge Cases to Consider:

    Empty Array: If the input array is empty, the function should return an empty array since there are no elements to flatten.
    Array with No Nested Arrays: If the input array contains no nested arrays, the function should return the same array, as it is already flat.
    In this example, the flattenArray function correctly flattens the nestedArray into a single flat array [1, 2, 3, 4, 5, 6].
