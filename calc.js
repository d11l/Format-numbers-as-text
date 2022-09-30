const calcForm = document.getElementById('calc-form'),
      Amount = document.getElementById('amount'),
      calcBtn = document.getElementById('calc-btn'),
      clearBtn = document.getElementById('clear-btn'),
      res = document.getElementsByClassName('result')

calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSavingInfo();
});

clearBtn.addEventListener('click', clearInputAndResult);

function showSavingInfo(){
res[0].innerHTML =  `${numToEng(Amount.value)}`;  
res[1].innerHTML =  `${numToEng2(Amount.value)}`;  
}


function clearInputAndResult(){
    calcForm.reset();
    res[0].innerHTML = "&mdash;";
    res[1].innerHTML = "&mdash;";
    
}

function numToEng(n) {

    if(n>999){
        return `الرقم خارج النطاق المحدد من فضلك ادخل رقم اقل من 999`;
    }

ones = ["صفر", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة",
"احدى عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"];

let tens = ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];

let hundreds = ["مئة", "مئتان", "ثلاث مئة", "أربع مئة", "خمسة مئة",
"ست مئة", "سبعة مئة ", "ثمان مئة ", "تسعة مئة"];
let Res = "",
ns = n.toString();
let summa = 0;

//onse
if (n < 20) {
Res = ones[n];
}
else if (n < 100) {
Res = tens[parseInt(ns[0])];
if (parseInt(ns[1]) != 0) {
Res = ones[parseInt(ns[1])]+' و '+Res;
}
}


else if (n < 1000) {

Res = hundreds[parseInt(ns[0])- 1];

summa = parseInt(ns.substring(1));
if (summa < 20 && summa != 0) {
Res +=' و '+ ones[summa];
}
else {

if (parseInt(ns[1]) != 0 && parseInt(ns[2]) != 0) {
   
    Res +=' و ' +ones[parseInt(ns[2])]+' و ' +tens[parseInt(ns[1])];
}
if (parseInt(ns[1]) != 0 && parseInt(ns[2]) == 0) {
   
    Res += ' و ' +tens[parseInt(ns[1])];
}

if (parseInt(ns[1]) == 0 && parseInt(ns[2]) != 0) {
   
    Res += ' و ' +ones[parseInt(ns[2])];
}

}
}
return Res;
}

function numToEng2(n) {

 

ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

let hundreds = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred",
"six hundred", "seven hundred", "eight hundred", "nine hundred"];
let Res = "",
ns = n.toString();
let summa = 0;

//onse
if (n < 20) {
Res = ones[n];
}
else if (n < 100) {
Res = tens[parseInt(ns[0])];
if (parseInt(ns[1]) != 0) {
Res += "-" + ones[parseInt(ns[1])];
}

}
else if (n < 1000) {

Res = hundreds[parseInt(ns[0])- 1];

summa = parseInt(ns.substring(1));
if (summa < 20 && summa != 0) {
Res += " " + ones[summa];
}
else {

if (parseInt(ns[1]) != 0) {
    Res += " " + tens[parseInt(ns[1])];
}

if (parseInt(ns[2]) != 0) {
    Res += "-" + ones[parseInt(ns[2])];
}

}
}
return Res;
}