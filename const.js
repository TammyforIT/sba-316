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

// ALL li (even new ones) turn blue
list.addEventListener("click", e => {
  if (e.target.tagName === "LI") {

    //ttext clicked to blu 
    e.target.style.color = "blue";

    //
    const li = e.target;
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
    };

    input.addEventListener("blur", save);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") save();
    });
  }
});

tempBtn.addEventListener("click", () => {
  const frag = document.createDocumentFragment();
  const t = document.getElementById("temp");
  const clone = t.content.cloneNode(true);
  frag.appendChild(clone);
  list.appendChild(frag);
});//

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
});
//preventdefault so it doesnt restart to natural default after reload or submitted.

title.addEventListener("mouseover", () => {
  title.setAttribute("title", "Hovering");
});

console.log(list.firstElementChild.textContent);
console.log(list.firstElementChild.nextElementSibling.textContent);
