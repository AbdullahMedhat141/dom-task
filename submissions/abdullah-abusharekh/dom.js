"use strict";

//Task 1

//1
console.log(document.body.lastElementChild.tagName);
//////////////////////////
console.log(document.body.children.length); //3
console.log(document.body.childNodes.length); //6
/* the main difference between children and childNodes:
 childNodes takes the white spaces like: '\n' as a text node beside the direct children nodes
but children just takes the children nodes. */

//2
console.log(document.body.childNodes[0].nodeType); // 3
console.log(document.body.childNodes[0].nodeName); // #text
///////////////////////////////////
// const secondParagraph = document.querySelector("section p:nth-of-type(2)");
const section = document.getElementsByTagName("section")[0];
const secondParagraph = section.getElementsByTagName("p")[1];

console.log(secondParagraph.previousElementSibling); // siblings

// Twist
// document.body.childNodes.forEach((node) => {
//   if (node.nodeType === 3) console.log(node);
// });

document.body.childNodes.forEach((node) => {
  if (node.nodeType === 3 && node.textContent.trim() === "") {
    console.log("Unexpected text node:", node);
  }
});
/* Text nodes come from the new lines between elements,So they are
basically white spaces and the browser turns them into nodes. */

//Task 2
const divEl = document.createElement("div");
divEl.classList.add("card");
// divEl.setAttribute("data-role", "admin");
divEl.dataset.role = "admin";

const h2 = document.createElement("h2");
h2.textContent = "Access Panel";

const newP = document.createElement("p");
newP.textContent = "Authenticated";

divEl.append(h2, newP);
const body = document.body;
body.append(divEl);
////////////////////////////////////
const card = document.querySelector(".card");
console.log(card.dataset.role);
///////////////////////////////////
const paragraph = document.querySelector(".card p");
paragraph.textContent = "Welcome back, Admin";
//////////////////////////////////
card.classList.add("authenticated", "highlight");

//Challenge
console.log(card.classList.contains("card"));
card.classList.remove("card");
console.log([...card.classList]);
