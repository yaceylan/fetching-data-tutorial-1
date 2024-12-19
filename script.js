// console.log("Js Script geladen");

// const header = document.getElementById('header-example')
// // console.log(header);
// header.innerHTML = "Das ist ein Test";
// console.log(header)

// if (header){
//     console.log("Wir haben eine Überschrift");
// } else {
//     console.log("Wir haben keine Überschrift");
// }



// const firstListElement = document.getElementById('first-list-element');
// const checkbox = document.getElementById('checkbox');
// const updateButton = document.getElementById('updateButton');
// console.log(updateButton);
// function () {} === () => {}
// updateButton.addEventListener('click',function () {
//     console.log("Button gedrückt");
//     if (checkbox.checked){
//         console.log(checkbox.checked);
//         firstListElement.style.backgroundColor = "green";
//     } else {
//         console.log(checkbox.checked);
//         firstListElement.style.backgroundColor = "red";
//     }
// });
// console.log(checkbox.checked)
// updateListItems();

// function updateListItems(){
//     console.log(checkbox.checked);
//     if(header){
//         firstListElement.style.color = "rgb(0,0,0)"
//         firstListElement.style.textDecoration = "line-through";
//     }
// }
// const secondListElement = document.getElementById('second-list-element');
//  console.log(secondListElement.style);


// const lists = document.querySelectorAll('.list');
// console.log(lists);

// const listWithId = document.getElementById('list');
// console.log(listWithId);

// Hier beginnt unser Skript
const list = document.querySelector('.list[id="list"]')
let items = [];

// Funktion zum Rendern
function renderItems(){
    // console.log(list);
    list.innerHTML = '';
    // console.log("leere Liste", list.innerHTML);
    items.forEach((item) => {
        // list items jeweils erstellen
        const listItem = document.createElement('li');
        listItem.innerHTML = item.text;
        listItem.classList.add('list-item');
        // console.log(listItem);
        
        // Checkbox jeweils erstellen
        const checkboxForItem = document.createElement('input');
        checkboxForItem.type = 'checkbox';
        checkboxForItem.checked = false;
        checkboxForItem.classList.add('checkbox-item');

        checkboxForItem.addEventListener('change', () => {
            // console.log(checkboxForItem.checked);
            if (checkboxForItem.checked){
                listItem.style.textDecoration = 'line-through';
            } else {
                listItem.style.textDecoration = 'none';
            }
        })

        // dem DOM hinzufügen
        list.appendChild(listItem);
        listItem.appendChild(checkboxForItem);
    })
    saveItems();
    // console.log("gefüllte Liste", list.innerHTMl);
}
// Items hinzufügen
const button = document.getElementById('add-item-button')
const input = document.getElementById('input-item');
button.addEventListener('click', () => {
    console.log("Hinzufügen-Button gedrückt");
    const newItem = {
        id: Date.now(),
        text: input.value
    }
    items.push(newItem);
    input.value = '';
    // console.log(items);
    renderItems();
})


// Funktion zum Speichern im localstorage
function saveItems(){
    // console.log(items.length === 0)
    // console.log(items);
    if (items.length === 0){
        // console.log("klappt");
        return;
    };
    const stringifiedItems = JSON.stringify(items);
    // console.log(typeof(stringifiedItems));
    localStorage.setItem("items", stringifiedItems);
}

// Funktion zum Laden der Items
function loadItems(){
    console.log("loading storage");
    const itemsFromLocalStorage = localStorage.getItem('items');
    if (!itemsFromLocalStorage){
        items = [];
    } else {
        items = JSON.parse(itemsFromLocalStorage);
    }
    // console.log(itemsFromLocalStorage);
    // console.log(items);
}

// Ablauf der Funktionsaufrufe 
loadItems();
renderItems();
saveItems();








// console.log("ende erreicht");
// add-item-button.addEventListener



// alternative Möglichkeiten, eine for-Schleife zu definieren
// for (let i=0; i <items.length; i++){
//     const listItem = document.createElement('li');
//     listItem.innerHTML = items[i];
//     console.log(listItem);
// }

// for (const item in items){
//     const listItem = document.createElement('li');
//     listItem.innerHTML = item;
//     console.log(listItem);
// }

// for(item of items){
//     const listItem = document.createElement('li');
//     listItem.innerHTML = item;
//     console.log(listItem);
// }

// items.push("Wasser");
// console.log(items)




