function addTodo(e) {
	e.preventDefault();
	const todoItem = document.createElement("li");
	todoItem.addEventListener("click", completeTodo);
	let formValue = document.querySelector("#item");
	todoItem.innerHTML = formValue.value;
	let deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "X";
	deleteBtn.addEventListener("click", removeTodo);
	todoItem.appendChild(deleteBtn);
	const itemList = document.querySelector("ul");
	itemList.appendChild(todoItem);
	formValue.value = "";
}
let todoForm = document.querySelector("form");
todoForm.addEventListener("submit", addTodo);

function removeTodo(e) {
	e.target.parentNode.remove();
}

function completeTodo(e) {
	let target = e;
	let check = e.target.getAttribute("aria-checked");
	if (check === "true") {
		e.target.setAttribute("aria-checked", false);
	} else {
		e.target.setAttribute("aria-checked", true);
		showMessage(target);
		setTimeout(function(param) {
			param.target.parentNode.parentNode.lastElementChild.style.visibility =
				"visible";
		}, 2000);
	}
}
function showMessage(param) {
	param.target.parentNode.parentNode.lastElementChild.style.visibility =
		"visible";
}
