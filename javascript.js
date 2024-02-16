//Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".qoute");
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Amateurs sit and wait for inspiration, the rest of us just get up and go to work"`,
    person: `Stephen King`
},{
    quote: `"No one in the brief history of computing has ever written a piece of perfect software.\n It’s unlikely that you’ll be the first"`,
    person: `Andy Hunt`
},{
    quote: `Debugging becomes significantly easier if you first admit that you are the problem`,
    person: `William Laeder`
},{
    quote: `"Your self-worth is determined by you. You don't have to depend on someone telling you who you are."`,
    person: `Beyonce`
},{
    quote: `“You have brains in your head. You have feet in your shoes.\n You can steer yourself any direction you choose. \nYou're on your own. And you know what you know.\n And you are the guy who'll decide where to go."`,
    person: `Dr. Seuss`
}];

function card(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}
btn.addEventListener('click',card);