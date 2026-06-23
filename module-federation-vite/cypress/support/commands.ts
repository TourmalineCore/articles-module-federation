/// <reference types="cypress" />

Cypress.Commands.add(`getByData`, (selector: string) =>
  cy.get(`[data-cy="${selector}"]`)
)
