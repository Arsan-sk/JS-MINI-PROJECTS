let items = [];

const divItems = document.getElementById("items");
const addInput = document.getElementById("itemInput");
const storageKey = "items";

function renderItems() {
    divItems.innerHTML = null;

    for (const [idx, item] of Object.entries(items)){
        const conatiner = document.createElement("div");
        conatiner.style.marginBottom = "10px";
        // conatiner.style.margin = "10px";
        
        const text = document.createElement("p");
        text.innerText = item;
        text.style.display = "inline";

        const button = document.createElement("button");
        button.innerText = "Delete";
        button.style.marginLeft = "10px";

        button.onclick = () => removeItems(idx);

        conatiner.appendChild(text);
        conatiner.appendChild(button);

        divItems.appendChild(conatiner);
    }

}

renderItems();

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) {
        items = JSON.parse(oldItems);
        renderItems();
    }
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function removeItems(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

function addItem() {
    const item = addInput.value;
    if (!item) {
        alert("Please enter a valid item");
        return;
    } 
    items.push(item);
    addInput.value = null;
    renderItems();
    saveItems()
}

// following line is for loading items from local storage as soon as page loads
document.addEventListener("DOMContentLoaded", loadItems);