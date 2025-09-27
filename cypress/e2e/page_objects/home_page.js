class HomePage {
    get url() {
        return "/home";
    }

    visit() {
        cy.visit(this.url);
    }

    homeButton() { return cy.get('[data-qa-id="webnav-globalnav-home"]'); }
    profileButton() { return cy.get('.hui-globalusermenu'); }
    logOutButton() { return cy.get('[data-qa-id="webnav-usermenu-logout"]'); }

}
module.exports = new HomePage();