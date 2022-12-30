let user_price = prompt("Enter the Price of Chicken in per kg: ");
let quantity = prompt("Enter the Quantity of Chickenin Grams: ");

let convert_quantity = quantity / 1000;
let price = user_price * convert_quantity

document.write("you have to pay - " + price + " Rupees")