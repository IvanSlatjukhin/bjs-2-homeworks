'use strict'

function solveEquation(a, b, c) {
   let arr = [];
   let d=b**2-4*a*c;

   if (d==0){
     let x1=-b/(2*a);
     arr=[x1];

   } else if (d>0){
     let x1=(-b + Math.sqrt(d) )/(2*a);
     let x2=(-b - Math.sqrt(d) )/(2*a);
     arr=[x1,x2];
   }
   return arr;
 }

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    let S = amount - contribution;
    let P = percent / 100 / 12;

    if ((percent < 0 || contribution < 0 || amount < 0 || countMonths < 0 ) ||
    (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths) )) {
    return false;
    }

    let monthAmount = S * (P + (P / (((1 + P)**countMonths) - 1)));
    let totalAmount = monthAmount * countMonths;

    return +totalAmount.toFixed(2);

}