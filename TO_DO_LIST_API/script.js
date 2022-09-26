let todosContent = document.getElementById("todosContent");
let showAll = document.getElementById("showAllBtn");
let completed = document.getElementById("completedBtn");
let pending = document.getElementById("pendingBtn");
let heading = document.getElementById("heading");

function fetchingData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data); //data Array console

      let html = data
        .map((todo) => {
          if (todo.completed == false) {
            return `<p style="color:red">${todo.title}</p>`;
          }
          if (todo.completed == true) {
            return `<p style="color:green">${todo.title}</p>`;
          }
        })
        .join("");
      todosContent.innerHTML = html;

      showAll.addEventListener("click", () => {
        heading.innerHTML = "Todo list - All";
        let html = data
          .map((todo) => {
            if (todo.completed == false) {
              return `<p style="color:red">${todo.title}</p>`;
            }
            if (todo.completed == true) {
              return `<p style="color:green">${todo.title}</p>`;
            }
          })
          .join("");
        todosContent.innerHTML = html;
      });

      completed.addEventListener("click", () => {
        heading.innerHTML = "Todo list - Completed";
        let html = data
          .filter((val) => {
            if (val.completed == true) {
              return val;
            }
          })
          .map((todo) => {
            return `<p style="color:green">${todo.title}</p>`;
          })
          .join("");
        todosContent.innerHTML = html;
      });

      pending.addEventListener("click", () => {
        heading.innerHTML = "Todo list - Pending";
        let html = data
          .filter((val) => {
            if (val.completed == false) {
              return val;
            }
          })
          .map((todo) => {
            return `<p style="color:red">${todo.title}</p>`;
          })
          .join("");
        todosContent.innerHTML = html;
      });
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

fetchingData();
