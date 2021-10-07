var form = document.getElementById("form");
const list = document.querySelector("#list");
let tasks = [];
if (!localStorage.tasks) {
	localStorage.setItem("tasks", JSON.stringify([]));
}

function add(event) {
	event.preventDefault();

	if (!document.getElementById("task").value) {
		alert("Enter any task");
		return;
	}

	let newTask = {
		task: document.getElementById("task").value,
	};

	tasks.push(newTask);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	form.reset();
	location.reload();
}

function List1() {
	var count = localStorage.length;
	if (count > 0) {
		tasks = JSON.parse(localStorage.getItem("tasks"));
		for (var i in tasks) {
			var pre = "<pre>";
			var work = tasks[i];
			pre += `${work.task}`;
			pre += `	<button ctr=${i} id="delete" class="btn btn-danger btn-sm" onclick = "removeWork(${i})" > Done </button>`;
			pre += ` <span class="hide">click to delete</span>`;
			const item = document.createElement("li");
			item.innerHTML = pre;
			list.appendChild(item);
		}
	}
}

function removeWork(idx) {
	tasks.splice(idx, 1);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
	form.addEventListener("submit", add);
	List1();
});
