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

## What to test?

1. Test component renders
2. Test component renders with props
3. Test component renders in different states
4. Test component reacts to events

## what not to test?

1. Implementation details
2. Third party code
3. Code that is not imortant from a user point of view

<!-- ----------------------------------------------------------------------------------------------------------- -->

## RTL Queries

Every test we write generally involves the following basic steps:

1. Render the component
2. Find an element rendered by the component
3. Assert againt the element found in step 2 which will pass or fail in the test

To render the component, we use the render method from RTL.
For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom.

queries are the methods that Testing Library provides to find elements on page.
To find a single elment on the page, we have:
getBy.., queryBy.., findBy..
To find multiple elements on the page, we have:
getAllBy.., queryAllBy.., findAllBy..

The suffix can be one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId

## getBy.. queries

getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found

## Priority Order for Queries

Your test should resemble how users interact with your code (component, page etc.) as mush as possible.

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId
<!-- ---------------------------------------------------------------------------------------------- -->
