// Runtime: 39 ms (Top 96.02%) | Memory: 41.50 MB (Top 68.13%)

var numTrees = function(n) {
    // Create 'sol' array to store the solution...
    var sol = [1, 1];
    // Run a loop from 2 to n...
    for (let i = 2; i <= n; i++) {
        sol[i] = 0;
        // Within the above loop, run a nested loop from 1 to i...
        for (let j = 1; j <= i; j++) {
            // Update the i-th position of the array by adding the multiplication of the respective index...
            sol[i] += sol[i - j] * sol[j - 1];
        }
    }
    // Return the value of the nth index of the array to get the solution...
    return sol[n];
};
