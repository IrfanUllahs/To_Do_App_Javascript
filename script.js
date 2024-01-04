let input = document.querySelector("#taskID");
let button = document.querySelector("button");
let ul = document.querySelector("#ul");
button.addEventListener("click", function (e) {
  if (input.value == "") {
    alert("Enter a text");
  } else {
    let li = document.createElement("li");

    li.innerHTML = input.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10060";
    li.appendChild(span);
    input.value = "";
    saveData();
  }
});
ul.addEventListener("click", function (e) {
  let parentnode = e.target.parentNode;

  if (e.target.tagName == "SPAN") {
    console.log("hi");
    parentnode.remove();
    saveData();
  } else if (e.target.tagName == "LI") {
    if (e.target.classList.contains("li-item")) {
      e.target.classList.remove("li-item");
      saveData();
    } else {
      e.target.classList.add("li-item");
      saveData();
    }
    
  }
});
function saveData(){
  localStorage.setItem('data',ul.innerHTML)
}
function showData(){
  ul.innerHTML=localStorage.getItem('data')
}
showData();