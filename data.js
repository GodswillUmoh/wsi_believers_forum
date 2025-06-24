const taskSelect = document.getElementById("taskSelect");
const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
const today = new Date().toDateString();

const usedTasks = submissions
  .filter(s => s.date === today)
  .map(s => s.task)
  .flat();

const allTasks = JSON.parse(localStorage.getItem("weeklyTasks")) || [];

const availableTasks = allTasks.filter(task => !usedTasks.includes(task));

availableTasks.forEach(task => {
  const option = document.createElement("option");
  option.value = task;
  option.textContent = task;
  taskSelect.appendChild(option);
});

document.getElementById("taskForm").onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const task = taskSelect.value;
  const date = new Date().toDateString();

  const newEntry = { name, phone, task, date };
  submissions.push(newEntry);
  localStorage.setItem("submissions", JSON.stringify(submissions));
  alert("Submitted successfully!");
  location.reload();
};
