/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let allYears = data.asteroids.map((rock) => rock.discoveryYear);

  let count = [];
  let highest = 0;

  let results;

  for (let i = 0; i < allYears.length; i++) {
    if (count[allYears[i]]) {
      count[allYears[i]]++;
    } else {
      count[allYears[i]] = 1;
    }

    for (let year in count) {
      if (count[year] > highest) {
        results = year;
        highest = count[year];
      }
    }
  }
  return +results;
}
// +results "+"" is shortcut to a string number to regular number

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
