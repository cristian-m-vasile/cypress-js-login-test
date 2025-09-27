class LoginPage {
    get url() {
        return "/login";
    }

    visit() {
        cy.visit(this.url);
    }

    email() {
        return cy.get("#username");
    }

    password() {
        return cy.get("#password");
    }

    continue() {
        return cy.contains("button, [type='submit']", /continue/i);
    }

    emailPasswordMismatchError() {
        return cy.get("#error-element-password");
    }

    emailRequiredError() {
        return cy.get("#error-cs-username-required");
    }

    emailInvalidError() {
        return cy.get("#error-cs-email-invalid");
    }

    passwordRequiredError() {
        return cy.get("#error-cs-password-required");
    }
}

module.exports = new LoginPage();