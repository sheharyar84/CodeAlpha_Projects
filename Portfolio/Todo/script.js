const input = document.querySelector("input")
const button = document.querySelector(".AddTodo")
const list = document.querySelector(".todoList")
const remove = document.querySelector(".remove")

button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please Add your Task")
    }else{
        let todo = document.createElement("li")
        todo.innerHTML = `${input.value} <button class="remove">Delete</button>`
        list.append(todo)
        input.value = ""
    }
})
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
    }
});
