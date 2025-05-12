//Nazareth Agüero Alvarado
export class CommonPageElements{
    static get topMenu(){
        return {
            get home(){
                return cy.contains("a","Home");
            },

            get contact(){
                return cy.get("a","Contact")
            },

             get aboutUs(){
                return cy.get("a","About Us")
            },

             get cart(){
                return cy.get("a","Cart")
            },

             get login(){
                return cy.get("a","Log in")
            },

             get signup(){
                return cy.get("a","Sign up")
            }
        };
    }
}