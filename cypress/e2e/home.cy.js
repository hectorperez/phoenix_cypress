/// <reference types="cypress" />

describe('home', () => {
  it('returns Peace of mind', () => {
    cy.visit('localhost:4000/')
    cy.contains('Peace of mind from prototype to production')
  })
})
