## Jest

Jest is a javascript testing framework.
Jest is a test runner that finds tests, runs the tests, determines wheather the tests passed or failed and reports it back in a human readable manner.

## React Testing Library

Javascript testing utility that provides virtual DOM for testing React components.
React Testing Library provides a virtual DOM which we can use to interact with and verify the behaviour of a react component.
Testing Library is infact a family of packages which helps test UI components.
The core library is called DOM testing library and RTL is simply a wrapper around the core library to test React applications in easier way.

## Types of Tests

1. Unit Tests
2. Integration Tests
3. E2E Tests

## Unit Tests

Focus is on testing the individual building blocks of an application such as a class or a function or a component.
Each unit or building block is tested in isolation, independent of other units
Dependencies are mocked
Run in a short amount of time and make it very easy to pinpoint failures
Relatively easier to write and maintain

## Integration Tests

Focus is on testing a combination of units and ensuring they work together
Take longer than unit tests

## E2E Tests

Focus is on testing the entire application flow and ensuring it works as designed from start to finish.
Involves in a real UI, a real backend database, real services etc..
Take the longest as they cover the most amount of code
Have a cost implication as you interact with real APIs that may charge based on the number of requests

## Test Driven Development(TDD)

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue the pass

<!-- -------------------------------------------------------------------------------------------------------------------------------------- -->

## Jest Watch Mode

Watch mode is an option that we can pass to jest asking to watch files that have changed since the last commit and execute test related only to those changed files.
An optimization designed to make your tests run fast regardless of how many tests you have.

<!-- Test Suit ==> 1 File is called one test suit -->

## Filename conventions

Files with .test.js or .test.tsx suffix
Files with .spec.js or .spec.tsx suffix
Files with .js or .tsx suffix in **tests** folders.

## Alternate Alias

test ==> it
test.only ==> fit
test.skip ==> xit

## Coverage

Satement coverage
Branched coverage
Function coverage
Line coverage
