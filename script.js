// using querySelector
// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// let count = 1;
// setInterval(() => {
//   if (count < 1000) {
//     count++;
//     counter.innerText = count;
//   }
// }, 5);

// setTimeout(() => {
//   followers.innerText = "Followers in Instagram";
// }, 5000);

// using getElement
var counter = document.getElementsByClassName("counter")[0];
var followers = document.getElementsByClassName("followers")[0];

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 5);

setTimeout(() => {
  followers.innerHTML = "Followers In Instagram";
}, 5000);
