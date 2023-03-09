# Phoenix 1.7 with Cypress Tutorial

To have an overview of the set up, have a look at Cypress' PR [#1](https://github.com/hectorperez/phoenix_cypress/pull/1/files)

## Install Phoenix 1.7 and start the server:

```elixir
mix phx.new phx_cypress
mix deps.get
mix ecto.setup
mix phx.server
```

If you go to localhost:4000 in your browser, you'll see Phoenix's default root page: "Peace of mind from prototype to production..."

## Install Cypress:

```
cd assets
npm install cypress --save-dev
cd ..
```

## Ignore screenshots and videos in `.gitignore`
``` 
cypress/screenshots/*
cypress/videos/*
```

Unless you change the set up, the tests should be in `cypress/e2e`.
We have some example tests already there, but let's create our first one:

## Create your first Cypress test
Create a file in `cypress/e2e/home.cy.js`:

```js
/// <reference types="cypress" />

describe('home', () => {
  it('returns Peace of mind', () => {
    cy.visit('localhost:4000/')
    cy.contains('Peace of mind from prototype to production')
  })
})
```

## Open Cypress to run tests in visual mode
```
./assets/node_modules/cypress/bin/cypress open
```

## Run Cypress tests from the console
```
./assets/node_modules/cypress/bin/cypress run
```
