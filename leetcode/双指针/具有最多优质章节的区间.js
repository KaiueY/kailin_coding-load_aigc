function findBestChapterSequence(n, k, array_a) {
    let maxQuality = 0;
    let minTotal = Infinity;
    let bestStart = 0;
    let bestEnd = 0;
    
    // Iterate through all possible starting points
    for (let i = 0; i < n; i++) {
        let total = 0;
        let qualityCount = 0;
        
        // Iterate through possible ending points
        for (let j = i; j < n; j++) {
            total += array_a[j];
            if (total > k) break;
            
            // Count quality chapters (excluding first and last)
            let currentQuality = 0;
            for (let m = i + 1; m < j; m++) {
                if (array_a[m] > array_a[m - 1] && array_a[m] > array_a[m + 1]) {
                    currentQuality++;
                }
            }
            
            // Update best sequence if better found
            if (currentQuality > maxQuality || 
                (currentQuality === maxQuality && total < minTotal) ||
                (currentQuality === maxQuality && total === minTotal && i < bestStart)) {
                maxQuality = currentQuality;
                minTotal = total;
                bestStart = i;
                bestEnd = j;
            }
        }
    }
    
    return `${maxQuality},${bestStart + 1},${bestEnd + 1}`;
}

// Test case
console.log(findBestChapterSequence(8, 15000, [1000, 3000, 2000, 4000, 3000, 2000, 4000, 2000])); // Output: '2,1,5'
