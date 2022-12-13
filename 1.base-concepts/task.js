'use strict'

function solveEquation(a, b, c) {
   let arr = [];
   let D=b**2-4*a*c;

   if (D==0){
     let x1=-b/(2*a);
     arr=[x1];

   } else if (D>0){
     let x1=(-b + Math.sqrt(D) )/(2*a);
     let x2=(-b - Math.sqrt(D) )/(2*a);
     arr=[x1,x2];
   }
   return arr;
 }

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    let S = amount - contribution;
    let P = percent / 100 / 12;
    let date1 = new Date();
    let n = (date.getFullYear()*12 + date.getMonth()) - (date1.getFullYear()*12 + date1.getMonth());

    if ((percent < 0 ||  contribution < 0 || amount < 0 || n < 0 ) ||
    (isNaN(percent) === true|| isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true)) {
        return "Ошибка данные введены неверно";
    }

    let monthAmount = S * ( P + P / (((1 + P) ** n) - 1));
    let totalAmount = monthAmount * n;

    return totalAmount.toFixed(2);

}