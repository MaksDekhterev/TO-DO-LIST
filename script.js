const form = document.querySelector(".task-list__header");
let tasks = [];
const result = document.querySelector("#result");
const input = document.querySelector("#input");
const footer = document.querySelector("#footer");
const textCounter = document.querySelector(".task-list__counter");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
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
    counter.textContent = tasks.filter((e) => !e.done).length;
    result.innerHTML = "";
  }

  tasks.forEach((obj) => {
    const p = document.querySelector("p");
    input.addEventListener("input", () => {
      localStorage.setItem("text", input.value)
      p.textContent = input.value;
    });

    const li = document.createElement("li");

    if (obj.done) {
      li.className = "task-list__item--checked";
    } else {
      li.className = "task-list__item";
    }

    li.innerHTML = `<p class=${
      obj.done ? "task-list__text--done" : "task-list__text"
    } >${obj.text}</p>
     <div class="task-list__actions">
     <button id="done" class="task-list__complete-btn">
      <img src=${
        obj.done ? "./src/images/krest.svg" : "./src/images/checked.svg"
      } alt="" />
     </button>
     <button id="delete" class="task-list__delete-btn">
      <img src="./src/images/trash.svg" alt="" />
     </button>
     </div>`;

    result.appendChild(li);

    li.querySelector("#delete").addEventListener("click", () => {
      tasks = tasks.filter((elem) => elem.id != obj.id);
      render();
    });
    li.querySelector("#done").addEventListener("click", () => {
      const currentTask = tasks.find((elem) => elem.id === obj.id);
      currentTask.done = !currentTask.done;
      render();
    });
    footer.querySelector("#delDone").addEventListener("click", () => {
      tasks = tasks.filter((elem) => !elem.done);
      render();
    });
    footer.querySelector("#delAll").addEventListener("click", () => {
      tasks = [];
      counter.textContent = 0;
      render();
    });
  });
}
