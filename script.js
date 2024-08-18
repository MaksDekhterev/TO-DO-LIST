const form = document.querySelector(".task-list__header");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const result = document.querySelector("#result");
const counter = document.querySelector("#counter");
const input = document.querySelector("#input");
const content = document.querySelector("#content");
const footer = document.querySelector("#footer");
render();

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
  localStorage.setItem("tasks", JSON.stringify(tasks));
  counter.textContent = tasks.filter((e) => !e.done).length;
  if (!tasks.length) {
    result.style.display = "none";
    content.style.display = "none";
    footer.style.display = "none";
  } else {
    result.style.display = "flex";
    content.style.display = "block";
    footer.style.display = "flex";
    result.innerHTML = "";
  }

  tasks.forEach((obj) => {
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

    result.append(li);
    input.value = "";

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
