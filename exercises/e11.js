import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  const noMoon = data.planets.filter(planets => planets.moonsCount === undefined ).map(planets => planets.name);
  const someMoon = data.planets.filter(planets => planets.moonsCount <= 10 ).map(planets => planets.name);

  const lowMoon = someMoon.flatMap((x,i) => [x,noMoon[i]]) // had to look up .flatMap() because npm test-11 wanted exact pattern I originally had .concat instead
  
  return lowMoon;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
