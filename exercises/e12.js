import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  const total = data.planets
    .filter((planets) => planets.moonsCount !== undefined)
    .reduce((sum, planets) => sum + planets.moonsCount, 0);

  return total;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
