"use strict";

const myh2 = document.getElementById("myh2");
const textarea = document.querySelector("#jsonInput")

const output = document.getElementById("output")


myh2.textContent = "Hello!";
console.log(myh2);

const person = {
    favoriteColor:"blue",
    score:11
}


person["favoriteColor"]="red"
person.favoriteColor = "red"

myh2.addEventListener("click",function(){
    console.log("hello")
    console.log(person)
    output.textContent ="howdie"
})

myh2.addEventListener("", function () {
  
});
