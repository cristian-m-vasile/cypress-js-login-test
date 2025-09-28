class HomePage {
    // URL
    get url() {
        return "/home";
    }

    // Locators
    getHomeButton() {
        return cy.get('[data-qa-id="webnav-globalnav-home"]');
    }

    getProfileButton() {
        return cy.get(".hui-globalusermenu");
    }

    getLogoutButton() {
        return cy.get('[data-qa-id="webnav-usermenu-logout"]').first();
    }

    // Actions
    visit() {
        cy.visit(this.url);
    }

    hoverProfile() {
        this.getProfileButton().realHover();
    }

    clickLogout() {
        this.getLogoutButton().click();
    }
}

export const homePage = new HomePage();
