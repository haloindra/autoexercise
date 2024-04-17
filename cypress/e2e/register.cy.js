describe("Register user flow positive", () => {
  beforeEach(() => {
    // Before each test, launch the browser and navigate to the URL
    cy.visit("http://automationexercise.com");

    // Verify that the home page is successfully loaded
    cy.title().should("eq", "Automation Exercise");
  });

  it("Clicks on 'Signup / Login' button", () => {
    // Click on the 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // Verify that 'New User Signup!' is visible
    cy.contains('New User Signup!');
  });

  it("Enters name and email address and information detail", () => {
    // Click on the 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // Wait for the signup form to appear
    cy.get('.signup-form > h2').should('be.visible');

    // Enter name and email address
    cy.get('[data-qa="signup-name"]').type("Genjer");
    cy.get('[data-qa="signup-email"]').type("genjer@example.com");

    // Verify that name and email fields are correctly filled
    cy.get('[data-qa="signup-name"]').should("have.value", "Genjer");
    cy.get('[data-qa="signup-email"]').should("have.value", "genjer@example.com");

    // Click button signup
    cy.get('[data-qa="signup-button"]').click()

    // Enter account information details
    cy.get('#id_gender1').click()

    cy.get('[data-qa="password"]').type("okesiap123");
    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('1')
    cy.get('[data-qa="years"]').select('1998')

    // Enter address information details

    cy.get('[data-qa="first_name"]').type("Genjar")
    cy.get('[data-qa="last_name"]').type("Rasenggan")
    cy.get('[data-qa="company"]').type("mantap")
    cy.get('[data-qa="address"]').type("Mantrijeron")
    cy.get('[data-qa="address2"]').type("Jogjakarta")
    cy.get('[data-qa="country"]').select("Indonesia")


  });
})
