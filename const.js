const title = document.getElementById("title");
const textBtn = document.querySelector("#textBtn");
const addBtn = document.querySelector("#addBtn");
const tempBtn = document.querySelector("#tempBtn");
const list = document.querySelector("#list");

textBtn.addEventListener("click", () => {
  title.textContent = "Changed!";
  title.classList.toggle("red");
});
//when clicked on it turns red.

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New";
  list.appendChild(li);
});//this adds on to existing list

//so ALL li (even new ones) turn blue
list.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "blue";
  }
});
//this change any text clicked on to blue. 

tempBtn.addEventListener("click", () => {
  const frag = document.createDocumentFragment();
  const t = document.getElementById("temp");
  const clone = t.content.cloneNode(true);
  frag.appendChild(clone);
  list.appendChild(frag);
});//

const form = document.getElementById("form");// use id first.
const name = document.getElementById("name");
const err = document.getElementById("err");

form.addEventListener("input", () => {
  err.textContent = name.value.length < 3 ? "Too short" : "";
});


form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Submitted");
  console.log(window.innerWidth);
});
//preventdefault so it doesnt restart to natural default after reload or submitted.

title.addEventListener("mouseover", () => {
  title.setAttribute("title", "Hovering");
});

console.log(list.firstElementChild.textContent);
console.log(list.firstElementChild.nextElementSibling.textContent);
