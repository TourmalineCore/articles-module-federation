describe(`Layout Smoke`, () => {
  it(`
  GIVEN host-a is open
  WHEN navigate between pages using sidebar links
  SHOULD render correct page content for each route
  `, () => {
    cy.visit(`/host-a/`)

    // Check sidebar links exist

    cy
    .getByData(`sidebar`)
    .should(`exist`)

    cy
    .getByData(`nav-link-home`)
    .should(`exist`)

    cy
    .getByData(`nav-link-about`)
    .should(`exist`)

    cy
    .getByData(`nav-link-dashboard`)
    .should(`exist`)

    cy
    .getByData(`nav-link-reports`)
    .should(`exist`)

    // Check navigation between pages
    
    cy
    .getByData(`nav-link-about`)
    .click()

    cy
    .getByData(`about-page`)
    .should(`exist`)

    cy
    .getByData(`nav-link-home`)
    .click()

    cy
    .getByData(`home-page`)
    .should(`exist`)

    // TODO: add env to implement transition between applications

    // cy
    // .getByData(`nav-link-dashboard`)
    // .click()

    // cy
    // .getByData(`dashboard-page`)
    // .should(`exist`)

    // cy
    // .getByData(`nav-link-reports`)
    // .click()

    // cy
    // .getByData(`reports-page`)
    // .should(`exist`)
  })
})
