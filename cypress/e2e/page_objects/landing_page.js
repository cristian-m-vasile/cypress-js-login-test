class LandingPage {
    get url() {
        return "/en_gb";
    }

    visit() {
        cy.visit(this.url);
    }

    mainContent() { return cy.get("#maincontent"); }
    loginButton() { return cy.get('[data-qa-id="login-select"]'); }
    loginHudlButton() { return cy.get('[data-qa-id="login-hudl"]'); }
}
module.exports = new LandingPage();