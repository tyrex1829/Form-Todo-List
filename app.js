const form = document.querySelector("#shelterForm");
const ul = document.querySelector("#items");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const itemnameInput = form.elements.itemname;
    const descriptionInput = form.elements.description;

    addTodoList(itemnameInput.value, descriptionInput.value);
    
    itemnameInput.value = "";
    descriptionInput.value = "";
})

const addTodoList = (itemname, description) => {
    const li = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(itemname);
    li.append(bTag);
    li.append(` - ${description}`);
    ul.append(li);
}