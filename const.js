const title = document.getElementById("title");
const textBtn = document.querySelector("#textBtn");
const addBtn = document.querySelector("#addBtn");
const tempBtn = document.querySelector("#tempBtn");
const list = document.querySelector("#list");

/* ---------------- SAVE + LOAD ---------------- */
// keeps list saved even after reload
function saveList() {
  localStorage.setItem("myList", list.innerHTML);
}

const saved = localStorage.getItem("myList");
if (saved) {
  list.innerHTML = saved;
}
/* ---------------------------------------------- */

const colors = ["red", "green", "blue"]; 
let index = 0; 

textBtn.addEventListener("click", () => { 
  title.textContent = "Changed!"; 
  title.style.color = colors[index]; 
  index = (index + 1) % colors.length; 
});

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New";
  list.appendChild(li);
  saveList(); // SAVE
});

// ALL li (even new ones) turn blue
list.addEventListener("click", e => {

  // FIX: always get the LI even if clicking text node
  const li = e.target.closest("li");
  if (!li) return;

  //ttext clicked to blu 
  li.style.color = "blue";

  const oldText = li.textContent;

  const input = document.createElement("input");
  input.type = "text";
  input.value = oldText;
  input.style.width = "150px";

  li.textContent = "";
  li.appendChild(input);
  input.focus();

  const save = () => {
    li.textContent = input.value.trim() || oldText;
    saveList(); // SAVE EDIT
  };

  input.addEventListener("blur", save);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") save();
  });
});

tempBtn.addEventListener("click", () => {
  const frag = document.createDocumentFragment();
  const t = document.getElementById("temp");
  const clone = t.content.cloneNode(true);
  frag.appendChild(clone);
  list.appendChild(frag);
  saveList(); 
});

const form = document.getElementById("form");// use id first.
const nameInput = document.getElementById("nameinput"); 
const err = document.getElementById("err");

form.addEventListener("input", () => {
  err.textContent = nameInput.value.length < 3 ? "Too short" : "";
});

form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Submitted"); // kept alert
  console.log(window.innerWidth);

  const value = nameInput.value.trim();
  if (value.length < 3) return;

  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);

  nameInput.value = "";
  saveList(); // SAVE FORM ADD
});
//preventdefault so it doesnt restart to natural default after reload or submitted.

title.addEventListener("mouseover", () => {
  title.setAttribute("title", "Hovering");
});

console.log(list.firstElementChild.textContent);
console.log(list.firstElementChild.nextElementSibling.textContent);


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  // NEW ripple effect (replaces old one)
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = e.pageX + "px";
  ripple.style.top = e.pageY + "px";
  document.body.appendChild(ripple);

  // animate outward
  requestAnimationFrame(() => {
    ripple.style.transform = "translate(-50%, -50%) scale(4)";
    ripple.style.opacity = "0";
  });

 
  setTimeout(() => ripple.remove(), 450);
});
