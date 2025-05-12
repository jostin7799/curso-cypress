import { CartElements } from "./cart.elements";

//Nazareth Agüero Alvarado
export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }
}