const form = document.querySelector("#shelterForm");
const input = document.querySelector("#itemName");
const ul = document.querySelector("#item");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.append(li);
    input.value = "";
})