function clock(){
let hour= document.querySelector(".hour-h");
let minute= document.querySelector(".minute-h");
let second= document.querySelector(".second-h");

let date= new Date();

let hr= date.getHours();
let mint= date.getMinutes();
let sec = date.getSeconds();

hour.style.transform= `rotateZ(${hr*30+mint/12}deg)`;
minute.style.transform= `rotateZ(${mint*6} deg)`;
second.style.transform= `rotateZ(${sec*6}deg)`;

}
clock();
setInterval(clock, 1000);