const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = require("../../e2e/page_objects/login_page");
const homePage = require("../../e2e/page_objects/home_page");
const landingPage = require("../../e2e/page_objects/landing_page");

const userEmail = () => Cypress.env("USER_EMAIL");
const userPassword = () => Cypress.env("USER_PASSWORD");

Given("I am on the login page", () => {
    loginPage.visit();
    cy.url().should("include", loginPage.url);
});

Given("I am on the landing page", () => {
    landingPage.visit();
    cy.url().should("include", landingPage.url);
});

Given("I click login on the navbar", () => {
    landingPage.loginButton().click();
    landingPage.loginHudlButton().click();
});

When("I sign in with valid credentials", () => {
    if (!userEmail() || !userPassword()) {
        throw new Error("Set USER_EMAIL and USER_PASSWORD (cypress.env.json).");
    }
    loginPage.email().clear().type(userEmail());
    loginPage.continue().click();
    loginPage.password().clear().type(userPassword(), { log: false }); // we don't want to show the password
    loginPage.continue().click();
});

When("I attempt to sign in with a valid email", () => {
    if (!userEmail()) throw new Error("Set USER_EMAIL (cypress.env.json).");
    loginPage.email().clear().type(userEmail());
    loginPage.continue().click();
});

When("the wrong password", () => {
    loginPage.password().clear().type("WrongPass!123", { log: false }); // we don't want to show the password
    loginPage.continue().click();
})

When("an empty password", () => {
    loginPage.password().clear();
    loginPage.continue().click();
})

When("I attempt to sign in with an empty email", () => {
    loginPage.email().clear();
    loginPage.continue().click();
})

When("I attempt to sign in with an invalid email", () => {
    loginPage.email().clear().type("in@valid");
    loginPage.continue().click();
})

When("I submit the login form empty", () => {
    loginPage.continue().click();
});

When("I sign out", () => {
    homePage.profileButton().realHover();
    homePage.logOutButton().click();
});

Then("the navbar should now say 'log in'", () => {
    landingPage.loginButton().should("be.visible");
});

Then("I should see an empty email error", () => {
    loginPage.emailRequiredError().should('be.visible');
});

Then("I should see an empty password error", () => {
    loginPage.passwordRequiredError().should('be.visible');
});

Then("I should see an invalid email error", () => {
    loginPage.emailInvalidError().should('be.visible');
});

Then("I should land on the user homepage", () => {
    cy.url().should("include", homePage.url);
    homePage.homeButton().should("be.visible");
});

Then("I should be redirected to the landing page", () => {
    landingPage.mainContent().should("be.visible");
});

Then("the navbar should show my user", () => {
    homePage.profileButton().should("be.visible");
});

Then("the navbar should not show my user", () => {
    homePage.profileButton().should("not.exist");
});

Then("I should remain on the login page", () => {
    cy.url().should("include", loginPage.url);
});

Then("I should see an email password mismatch error", () => {
    loginPage.emailPasswordMismatchError().should("be.visible")
});

/*
This might seem superfluous, but without a test that the errors are not visible
in the first place, later checks for error visibility are incomplete
*/
Then("no email errors should be displayed",  () => {
    loginPage.emailInvalidError().should("not.be.visible")
    loginPage.emailRequiredError().should("not.be.visible")
});

Then("no password errors should be displayed",  () => {
    loginPage.passwordRequiredError().should("not.be.visible")
    loginPage.emailPasswordMismatchError().should("not.exist")
});
