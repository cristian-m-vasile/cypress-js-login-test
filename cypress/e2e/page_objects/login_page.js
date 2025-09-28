class LoginPage {
    // URL
    get url() {
        return "/login";
    }

    // Locators
    getEmailInput() {
        return cy.get("#username");
    }

    getPasswordInput() {
        return cy.get("#password");
    }

    getContinueButton() {
        return cy.contains("button, [type='submit']", /continue/i);
    }

    getEmailPasswordMismatchError() {
        return cy.get("#error-element-password");
    }

    getEmailRequiredError() {
        return cy.get("#error-cs-username-required");
    }

    getEmailInvalidError() {
        return cy.get("#error-cs-email-invalid");
    }

    getPasswordRequiredError() {
        return cy.get("#error-cs-password-required");
    }

    // Actions
    visit() {
        cy.visit(this.url);
    }

    enterEmail(email) {
        this.getEmailInput().clear().type(email);
    }

    enterPassword(password) {
        this.getPasswordInput().clear().type(password, { log: false });
    }

    clickContinue() {
        this.getContinueButton().click();
    }
}

export const loginPage = new LoginPage();
