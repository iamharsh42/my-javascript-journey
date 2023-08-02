// let myAge = 21;
// let humanDogRatio = 7;
// let myDogAge = myAge*humanDogRatio;
// console.log(myDogAge);

// let bonusPoints = 50;
// bonusPoints+=100;
// console.log(bonusPoints);
// bonusPoints-=25;
// console.log(bonusPoints);
// bonusPoints+=70;
// console.log(bonusPoints);

// function totalTtime(a,b,c){
//     console.log(a+b+c);
// }

// totalTtime(7,2,2);

// let lapsCompleted=0;

// function tempTest()
// {
//     lapsCompleted++;
// }

// tempTest();
// tempTest();
// tempTest();

// console.log(lapsCompleted);

// we can create our own custom functions using the function keyword

// well now for the increment button to Worker, we will use the getElementById attribute/property

// document.getElementById("countEl").innerText = 7 .well this will give us the velue which is there in the id and also we can modify it using "innerText" property. this wa sthe syntax now we will apply it in small parts for out function.

let count = 0;

let countElement = document.getElementById("countEl"); // now this will give us the value that is there
let saveEl= document.getElementById("save-el");

function increment()
{
    console.log("click successful");
    count++;
    countElement.innerText= count; // here we are updating it after every click
    console.log(count);
}

function decrement(){
    count--;
    countElement.innerText= count;
}

function save(){
    let temp = count + " - ";
    saveEl.textContent += temp;  // well instead of innertext we can also use textContent as it a much advanced property
    console.log(count);
}

let welcomeEl = document.getElementById("welcome-el");

let name = "Harsh";
let greeting = "Welcome back, ";

welcomeEl.innerText = greeting + name;

function reset()
{
    countElement.textContent = 0;
    count = 0;
}

