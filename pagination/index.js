//limit = 3
//page 1: 0 -> 3
//page 2: 4 -> 6
//...
// startIndex = limit * (page - 1)
// endIndex = limit * page - 1

let index = 1;
const limit = 3;
const list = document.querySelector(".list");
const item = document.querySelectorAll(".item");
const pagination = document.querySelector(".pagination");
const loadItem = () => {
  let startIndex = limit * (index - 1);
  let endIndex = limit * index - 1;
  item.forEach((item, index) => {
    if (index >= startIndex && index <= endIndex) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
};
loadItem();
function listPage() {
  pagination.innerHTML = "";
  let count = Math.ceil(item.length / limit);
  for (let i = 1; i <= count; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    if (i === index) {
      li.classList.add("active");
    }
    li.setAttribute("onclick", "changePage(" + i + ")");
    pagination.appendChild(li);
  }
}
function changePage(i) {
  index = i;
  loadItem();
}
