// Given a string, S, of length N that is indexed from 0 to N-1 , print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

// Note: 0 is considered to be an even index.

// Example
// s = adbecf

// Print abc def

// Input Format

// The first line contains an integer, T (the number of test cases).
// Each line i of the T subsequent lines contain a string, S.


function processData(input) {
    const lines = input.trim().split('\n');    
    const numTestCases = parseInt(lines[0], 10);    
    for (let i = 1; i <= numTestCases; i++) {
        const str = lines[i];
        let even = '';
        let odd = '';
        for (let j = 0; j < str.length; j++) {
            if (j % 2 === 0) {
                even += str[j];
            } else {
                odd += str[j]; 
            }
        }
        console.log(even + ' ' + odd);
    }
}