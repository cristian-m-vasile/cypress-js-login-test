class LandingPage {
    // URL
    get url() {
        return "/en_gb";
    }

    // Locators
    getMainContent() {
        return cy.get("#maincontent");
    }

    getLoginButton() {
        return cy.get('[data-qa-id="login-select"]');
    }

    getLoginHudlButton() {
        return cy.get('[data-qa-id="login-hudl"]');
    }

    // Actions
    visit() {
        cy.visit(this.url);
    }

    clickLogin() {
        this.getLoginButton().click();
        this.getLoginHudlButton().click();
    }
}

export const landingPage = new LandingPage();
