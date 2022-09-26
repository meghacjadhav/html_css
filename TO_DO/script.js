let submitBtn = document.getElementById("submitBtn");
let todosContent = document.getElementById("todosContent");
let todo_input = document.getElementById("todo_input");

var index = 0;
submitBtn.addEventListener("click", function () {
  var para = document.createElement("p");
  // let key = todosContent.childElementCount;

  todosContent.setAttribute("key", index);
  para.innerText = todo_input.value + " " + index;
  index++;
  todosContent.appendChild(para);
  todo_input.value = "";
  para.addEventListener("click", function () {
    todosContent.removeChild(para);
    index--;
  });
});

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));
