

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    // let meal_cost;
    // let tip_percent = Math.round(12/100);
    // let tax_percent = Math.round(8/100);
    let tip = meal_cost * tip_percent/100;
    let tax = meal_cost * tax_percent/100;
    let total_cost = Math.round(meal_cost + tip + tax);
    console.log(total_cost);
    
}