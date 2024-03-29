export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function


function convert(price: number, rate: number) {
    let fee = price * 0.01;
    return (price * rate + fee).toFixed(2);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convert(price, 1.4);
const priceInBRL = convert(price, 5.5);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/