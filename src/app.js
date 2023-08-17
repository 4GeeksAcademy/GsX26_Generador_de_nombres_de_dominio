/* eslint-disable */
import "bootstrap";
import "./style.css";


import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dom = ['com', 'net', 'es'];
  //let myarray = [];
let htmlText = "";

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in dom) {
          console.log(pronoun[i]);
          console.log(adj[j]);
          console.log(noun[k]);
          console.log(dom[l]);
          let element = "<li>" +pronoun[i] + adj[j] + noun[k] + "." + dom[l] + "</li>"
          htmlText += element
          //myarray.push(element);
        }
      }
    }
  }
  //let htmlText = myarray.map((item) => {return `<li>${item}</li>`});
  let myList = document.querySelector('#domains')
  myList.innerHTML = htmlText
};
