class LandingPage {
    get url() {
        return "/";
    }

    visit() {
        cy.visit(this.url);
    }

    loginButton() { return cy.get('[data-qa-id="login-select"]'); }
    loginHudlButton() { return cy.get('[data-qa-id="login-hudl"]'); }
}
module.exports = new LandingPage();