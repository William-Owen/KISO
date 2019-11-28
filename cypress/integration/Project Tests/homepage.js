const siteURL = "http://localhost:3000"

describe("Application startpage", () => {

	beforeEach(() => {

		cy.visit(siteURL)

	})

	it("Contains the correct URL.", () => {

		cy.url()
			.should("include", siteURL)

	})

	it("We greet the world.", () => {

		cy.get("header h1")
			.should("contain", "Hello World")

	})

})

describe("Application Navigation", () => {

	beforeEach(() => {

		cy.visit(siteURL)

	})

	it("Contains Navigation.", () => {

		cy.visit(siteURL)

		cy.get(".NavigationPrimary").contains("Home").should("exist")
		cy.get(".NavigationPrimary").contains("Redux Example").should("exist")
		cy.get(".NavigationPrimary").contains("API Example").should("exist")
		cy.get(".NavigationPrimary").contains("Form Example").should("exist")

	})

	it("navigate to Homepage", () => {

		cy.get(".NavigationPrimary").contains("Home").click()
		cy.url().should("include", siteURL)

	})

	it("navigate to Redux Example", () => {

		cy.get(".NavigationPrimary").contains("Redux Example").click()
		cy.url().should("include", "/redux-example")

	})

	it("navigate to Form Example", () => {

		cy.get(".NavigationPrimary").contains("Form Example").click()
		cy.url().should("include", "/form-example")

	})

})
