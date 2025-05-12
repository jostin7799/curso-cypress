//Nazareth Agüero Alvarado
import { HomeMethods } from "./pages/login/home/home.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    HomeMethods.clickOnProductLink("Iphone 6 32gb")
    cy.wait(20000)
  })
})