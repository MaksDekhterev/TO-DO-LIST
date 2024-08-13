const form = document.querySelector(".task-list");
let tasks = [];
const result = document.querySelector("#result");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const counter = document.querySelector("#counter");

form.addEventListener("submit", (e) => {
  const task = {
    id: Date.now(),
    text: evt.target.input.value,
    done: false,
  };
  tasks.push(task);
  render();
});

function render() {
  if (!tasks.length) {
    result.style.display = "none";
  } else {
    result.style.display = "flex";
    counter.textContent = tasks.filter((e) => e.done).length;
    result.innerHTML = "";

    tasks.forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${e.text}</p>
    <div class="task-list__actions">
    <button id="done" class="task-list__complete-btn">
      <img src="./src/images/checked.svg" alt="" />
    </button>;
    <button id="delete" class="task-list__delete-btn">
      <img src="./src/images/trash.svg" alt="" />
    </button>;
    </div>`;
      result.appendChild(li);
    });
  }
}

// function render() {
//   if (tasks.length) {
//     wrapper.style.display = "none";
//   } else wrapper.style.display = "flex";

//   counter.textContent = tasks.filter((e) => e.done).length;
//   wrapper.innerHTML = "";
//   tasks.forEach((e) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<span>${e.text}</span>
//     <div class="task-list__actions">
//     <button id="done" class="task-list__complete-btn">
//       <img src="./src/images/checked.svg" alt="" />
//     </button>;
//     <button id="delete" class="task-list__delete-btn">
//       <img src="./src/images/trash.svg" alt="" />
//     </button>;
//     </div>`;
//     wrapper.appendChild
//     (li);
//     li.querySelector(".task-list__complete-btn").addEventListener(
//       "click",
//       () => {
//         li.style.textDecoration = "line-through";
//       }
//     );
//     li.querySelector(".task-list__delete-btn").addEventListener("click", () => {
//       li.remove;
//     });
//   });
// }

// form.addEventListener("submit", (evt) => {
//   const task = {
//     id: Date.now(),
//     text: evt.target.writeInput.value,
//     done: false,
//   };
//   tasks.push(task);
// });

// const input = document.querySelector("#input");
// const addBtn = document.querySelector("#addBtn");
// const result = document.querySelector("#result");
// const counter = document.querySelector("#counter");

// addBtn.addEventListener("click", (e) => {
//   if (input.value === "") return;
//   render(input.value);
//   input.value = "";
// });

// function render(value) {
//   console.log(value);

//   const doneImg = document.createElement("img");
//   doneImg.src = "./src/images/checked.svg";

//   const delImg = document.createElement("img");
//   delImg.src = "./src/images/trash.svg";

//   const divBtn = document.createElement("div");
//   const delBtn = document.createElement("button");
//   const doneBtn = document.createElement("button");
//   const li = document.createElement("li");

//   li.className = "task-list__item";
//   li.textContent = value;

//   divBtn.className = "task-list__actions";
//   li.appendChild(divBtn);

//   doneBtn.className = "task-list__complete-btn";
//   doneBtn.appendChild(doneImg);
//   divBtn.appendChild(doneBtn);

//   delBtn.className = "task-list__delete-btn";
//   delBtn.appendChild(delImg);
//   divBtn.appendChild(delBtn);

//   doneBtn.addEventListener("click", (e) => {
//     li.classList.toggle("task-list__item--checked");
//   });

//   delBtn.addEventListener("click", (e) => {
//     result.removeChild("li");
//   });

//   result.appendChild(li);
// }
