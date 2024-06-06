document.addEventListener("DOMContentLoaded", (event) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        newTodo(item.title, item.completed);
      });
    })
    .catch((error) => console.error("Error fetching:", error));

  document.querySelector(".addBtn").addEventListener("click", () => {
    const input = document.getElementById("myInput");
    const inputValue = input.value.trim();
    if (inputValue) {
      newTodo(inputValue, false);
      input.value = "";
    } else {
      alert("You cannot do nothing!");
    }
  });
});

function newTodo(title, completed) {
  if (!title) return; //check empty

  const list = document.getElementById("list");
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  const text = document.createElement("span");
  text.textContent = title;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "removeBtn";
  removeButton.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(removeButton);

  if (completed) {
    li.classList.add("completed");
  }
  list.insertBefore(li, list.firstChild); //new Todo at the top
}
