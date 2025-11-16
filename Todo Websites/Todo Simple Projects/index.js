// const taskList = document.getElementById("task-list");
// const addTaskBtn = document.getElementById("add-task-btn");
// const taskInput = document.getElementById("task-input");

// // Toggle checked state or delete task
// taskList.addEventListener("click", (e) => {  // tasklist er sathe click event listener add kora holo and e parameter hishebe event object neya holo jate click event er details thakbe
//   const li = e.target.parentElement; // li er moddhe click kora holo tai parent element neya holo, target hocche click kora element, parentElement hocche tar parent

//   if (e.target.classList.contains("check-btn")) { // jodi click kora element er moddhe check-btn class thake tahole ei condition true hobe
//     li.classList.toggle("checked");
//     e.target.src = li.classList.contains("checked")
//       ? "images/checked.png"
//       : "images/unchecked.png";
//   }

//   if (e.target.classList.contains("delete-btn")) {
//     li.remove();
//   }
// });

// // Add new task
// addTaskBtn.addEventListener("click", () => {
//   const taskText = taskInput.value.trim();
//   if (taskText === "") return;

//   const li = document.createElement("li");

//   const img = document.createElement("img");
//   img.src = "images/unchecked.png";
//   img.alt = "check";
//   img.classList.add("check-btn");

//   const span = document.createElement("span");
//   span.textContent = taskText;

//   const deleteBtn = document.createElement("span");
//   deleteBtn.textContent = "×";
//   deleteBtn.classList.add("delete-btn");

//   li.appendChild(img);
//   li.appendChild(span);
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
// });




const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");


taskList.addEventListener("click", (e) => {
const  li = e.target.parentElement;

if (e.target.classlist.contains("check-btn")){
  li.classlist.toggle("checked") // li er moddhe classlist er checkbtn ache tai checked class ta toggle korbe karon toggle mane add or remove kora ekhane
  e.target.src = li.classlist.contains("checked") // ei line hocche jodi li er moddhe checked class thake tahole checked.png dekhabe naile unchecked.png dekhabe
  ? "images/checked.png"
  : "images/unchecked.png";

}
if(e.target.classlist.contains("delete-btn")){
  li.remove();
}

})
