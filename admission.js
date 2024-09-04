function admission(){
var visitorAge=30;
var youngerFee = 10;
var adultFee = 20;
var result = (visitorAge <= 5 && visitorAge > 0) ? "free admissions" : (visitorAge >= 5 && visitorAge <= 12) ? ("The Admission fee is " + youngerFee+"$" ): (visitorAge >= 13&&visitorAge<=60) ? ("The Admission Fee is " + adultFee+"$" ): "not eligible";
document.getElementById("dispalyAdmission").textContent=result;
}