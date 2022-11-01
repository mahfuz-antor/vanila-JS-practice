const taskInput = document.getElementById("taskInput");
const showNewTask = document.getElementById("showTask");

const addBtn = document.getElementById("addBtn");
const timeShow = document.getElementById("time");

// get time and date
const dateMonth = new Date(); // 2009-11-10
const month = dateMonth.toLocaleString("default", { month: "long" });

const fullDay = new Date().toLocaleString("en-us", {
  weekday: "long",
});
const dateTime = new Date().getDate() + " " + month + ", " + fullDay;

timeShow.innerHTML = dateTime;
// end the time

const displayData = () => {
  const taskWrap = document.getElementById("taskWrap");
  const data = JSON.parse(localStorage.getItem("taskData")) || [];
  taskWrap.innerHTML = data
    .map((d, i) => {
      return `<div
                    class="flex justify-between gap-5 items-center bg-white py-5 px-8 text-gray-700 hover:scale-110 transition-all ease duration-300 hover:shadow-md shadow-blue-500/50  hover:border-l-8 border-[#52bffc]" >
                
                    <h4 id="showTask" class=" flex items-center text-xl font-medium ">
                        ${d}
                    </h4>
                    <img src="https://i.ibb.co/Pz4QgL6/images-removebg-preview-1.png" class="w-8 h-8 cursor-pointer" id="deleteTask" onclick='${() =>
                      deleteData()}' />
                
                </div>`;
    })
    .join("");
};

displayData();

const addTask = (e) => {
  e.preventDefault();
  let data = taskInput.value;
  let getLocalData = JSON.parse(localStorage.getItem("taskData")) || [];
  localStorage.setItem("taskData", JSON.stringify([...getLocalData, data]));
  e.target.reset();
  displayData();
  // location.reload();
  //   if (data === "") {
  //     data = window.location.reload();
  //   }
};

document.getElementById("formId").addEventListener("submit", (e) => {
  addTask(e);
});
