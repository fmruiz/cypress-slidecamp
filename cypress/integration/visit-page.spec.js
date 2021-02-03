/// <reference types="cypress" />

describe("Visit Page", () => {
    it("Visit Home Page", () => {
        cy.visit("https://www.slidecamp.io/");
    });

    it("Visit Blog", () => {
        cy.get('.nav-left > [href="/blog"]').click();
        cy.get('.navbar-brand > img').click();
    });

    it("Request A Demo", () => {
        cy.get('.nav-left > [href="/demo-request"]').click();
        cy.get('#first_name').type("Franco");
        cy.get('#last_name').type("Ruiz");
        cy.get('#email_address').type("fmruiz@fenix.com");
        cy.get('#company_name').type("Fenix Forward");
        cy.get('#team_is').select("1-10 people");
        cy.get('#company_has').select("1-50");
        cy.get('#btn-request-demo').click();
        cy.get('#request-demo-success > .btn').click();
    });

    it("Visit Presentation Design", () => {
        cy.get('[href="/custom-presentation"]').click();
        cy.get('.navbar-brand > img').click();
    });

    it("Click Login", () => {
        cy.get('.nav-right > .sc-nav-link').click();
    });
});