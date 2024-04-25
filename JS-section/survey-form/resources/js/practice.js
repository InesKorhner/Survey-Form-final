/**let tab = 10;
console.log ('tab'); 

function myFunction (a, b) {
return a+b;
}
let myVar = myFunction (5, 3);
console.log(myVar);

let t = 50 +'2';
t= 50 + parseInt ('2');
console.log (t);  //parsiranje ili promena iz stringa u broj//

let b = 20 + '1';
b= 20 + +'1';
console.log (b); //laksi nacim ovo je sami kod sabiranja//


let j = 6;
let i = j++;
console.log (j,i); //increment I nacun//

let p = 8;
let r = ++p;
console.log (p,r); // kada je ++ prvo povecava obe vrednosti- increment II nacin//



/**const myArray = [1, 2, 4];
console.log(myArray.length);

myArray.push (7);
console.log (myArray);
console.log (myArray[0]);
console.log (myArray[1]);

for (let counter = 1; counter <= 7; counter ++) {
    console.log (`counter of current iteration is ${counter}`);
}

const bankAccTest = {
    owner: 'Petar',
    pin: 4444,
    transactions: [300, -150, -250, 1000]
};

for (let key in bankAccTest) {
    console.log (`${key} : ${bankAccTest[key]}`);
} 

console.log (bankAccTest.pin); **/




document.getElementById('survey-form').addEventListener('submit', (event) => {
    // event.preventDefault(); 

 
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    console.log(name);
    console.log(email);
    console.log(age);
    

}); 


let minLength = 3;
let email = document.getElementById('email');

if (email) {
    email.addEventListener('input', function () {
        setTimeout(function () {
            if (email.value !== '' && email.value.length >= minLength) {
                console.log('Validation is passed');
            } else {
                console.log('Please enter the valid name');
            }
        }, 100);
    });
}


let minLength1 = 3;
let inputName = document.getElementById('name');

if (inputName) {
    email.addEventListener('input', function () {
        setTimeout(function () {
            if (inputName.value !== '' && inputName.value.length >= minLength) {
                console.log('Validation is passed');
            } else {
                console.log('Please enter the valid name');
            }
        }, 100);
    });
}

