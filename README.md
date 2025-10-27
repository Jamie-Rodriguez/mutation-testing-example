This repo is a simple example demonstrating how mutation testing can be used to spot some gaps in unit testing coverage metrics.

This repo also serves a secondary purpose as a template for a TypeScript project with unit testing with code coverage and mutation testing set up.

Limitations
===========

I notice that while the mutation library identified missed test cases, it did not discover **all** the missing test cases that I could imagine. So it could be said that while mutation testing can identify gaps in test coverage better than just traditional unit test coverage, it is definitely not exhaustive. So I see it as another useful tool to help gain greater confidence in your unit test suite.

Key Takeaways
=============

This demonstration shows that 100% traditional code coverage does not guarantee comprehensive testing. Mutation testing can help identify some gaps that traditional coverage tools miss.

Libraries Used
==============

For unit testing I'm using the well-known [Mocha](https://mochajs.org/) testing library with the [Chai](https://www.chaijs.com/) BDD/TDD assertion library.

For unit test code coverage I'm using [One Double Zero](https://one-double-zero.nightlycommit.com/).

For mutation testing I'm using [Stryker Mutator](https://stryker-mutator.io/docs/).

Order of Operations
===================

1. Don't forget to `npm install`!
2. Run unit test coverage via `npm run test:coverage`
    * The test coverage report will be output to `.odz_output/index.html`
3. Run mutation testing via `npm run test:mutation`
    * The mutation testing report will output to `reports/mutation/mutation.html`
4. Examine the test coverage report. Notice we have 100% coverage across all metrics. Hooray! We are done!

```
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------|---------|----------|---------|---------|-------------------
All files            |     100 |      100 |     100 |     100 |                   
 array-operations.ts |     100 |      100 |     100 |     100 |                   
 math-operations.ts  |     100 |      100 |     100 |     100 |                   
---------------------|---------|----------|---------|---------|-------------------
```

...or are we?

5. Now examine the mutation testing report

```
---------------------|------------------|----------|-----------|------------|----------|----------|
                     | % Mutation score |          |           |            |          |          |
File                 |  total | covered | # killed | # timeout | # survived | # no cov | # errors |
---------------------|--------|---------|----------|-----------|------------|----------|----------|
All files            |  85.84 |   85.84 |       92 |         5 |         16 |        0 |       12 |
 array-operations.ts |  92.31 |   92.31 |       22 |         2 |          2 |        0 |        6 |
 math-operations.ts  |  83.91 |   83.91 |       70 |         3 |         14 |        0 |        6 |
---------------------|--------|---------|----------|-----------|------------|----------|----------|
```

(Please see the [Stryker documentation](https://stryker-mutator.io/docs/General/faq/#q-so-what-is-this-mutation-score) for more details of these definitions)

As we can see, the mutation tests have identified missing test cases! They can be seen in more detail in the mutation testing report.
