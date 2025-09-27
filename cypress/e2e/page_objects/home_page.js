class HomePage {
    get url() {
        return "/home";
    }

    visit() {
        cy.visit(this.url);
    }

    homeButton() { return cy.get('[data-qa-id="webnav-globalnav-home"]'); }

}
module.exports = new HomePage();