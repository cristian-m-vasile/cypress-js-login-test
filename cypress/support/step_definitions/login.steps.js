import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../e2e/page_objects/login_page";
import { homePage } from "../../e2e/page_objects/home_page";
import { landingPage } from "../../e2e/page_objects/landing_page";

const userEmail = () => Cypress.env("USER_EMAIL");
const userPassword = () => Cypress.env("USER_PASSWORD");

// --- GIVEN ---
Given("I am on the login page", () => {
    loginPage.visit();
    cy.url().should("include", loginPage.url);
});

Given("I am on the landing page", () => {
    landingPage.visit();
    cy.url().should("include", landingPage.url);
});

Given("I click login on the navbar", () => {
    landingPage.clickLogin();
});

// --- WHEN ---
When("I sign in with valid credentials", () => {
    loginPage.enterEmail(userEmail());
    loginPage.clickContinue();
    loginPage.enterPassword(userPassword());
    loginPage.clickContinue();
});

When("I attempt to sign in with a valid email", () => {
    loginPage.enterEmail(userEmail());
    loginPage.clickContinue();
});

When("the wrong password", () => {
    loginPage.enterPassword("WrongPass!123");
    loginPage.clickContinue();
});

When("an empty password", () => {
    loginPage.getPasswordInput().clear();
    loginPage.clickContinue();
});

When("I attempt to sign in with an empty email", () => {
    loginPage.getEmailInput().clear();
    loginPage.clickContinue();
});

When("I attempt to sign in with an invalid email", () => {
    loginPage.enterEmail("in@valid");
    loginPage.clickContinue();
});

When("I submit the login form empty", () => {
    loginPage.clickContinue();
});

When("I sign out", () => {
    homePage.hoverProfile();
    homePage.clickLogout();
});

// --- THEN ---
Then("the navbar should now say 'log in'", () => {
    landingPage.getLoginButton().should("be.visible");
});

Then("I should see an empty email error", () => {
    loginPage.getEmailRequiredError().should("be.visible");
});

Then("I should see an empty password error", () => {
    loginPage.getPasswordRequiredError().should("be.visible");
});

Then("I should see an invalid email error", () => {
    loginPage.getEmailInvalidError().should("be.visible");
});

Then("I should land on the user homepage", () => {
    cy.url().should("include", homePage.url);
    homePage.getHomeButton().should("be.visible");
});

Then("I should be redirected to the landing page", () => {
    landingPage.getMainContent().should("be.visible");
});

Then("the navbar should show my user", () => {
    homePage.getProfileButton().should("be.visible");
});

Then("the navbar should not show my user", () => {
    homePage.getProfileButton().should("not.exist");
});

Then("I should remain on the login page", () => {
    cy.url().should("include", loginPage.url);
});

Then("I should see an email password mismatch error", () => {
    loginPage.getEmailPasswordMismatchError().should("be.visible");
});

Then("no email errors should be displayed", () => {
    loginPage.getEmailInvalidError().should("not.be.visible");
    loginPage.getEmailRequiredError().should("not.be.visible");
});

Then("no password errors should be displayed", () => {
    loginPage.getPasswordRequiredError().should("not.be.visible");
    loginPage.getEmailPasswordMismatchError().should("not.exist");
});
