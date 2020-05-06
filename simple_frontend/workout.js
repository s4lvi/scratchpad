var workouts = new Map();

var form = document.getElementById("form");

function handleForm(event) { 
    event.preventDefault(); 
} 

form.addEventListener('submit', handleForm);


function update() {
    let type = document.getElementById("workout-input");
    if (type.value != "") {
        workouts.set(type.value,0);
        type.value = "";
        refresh();
    }
}

function remove(key) {
    workouts.delete(key);
    refresh();
}
// redo this using a set group capacity, ex 5 so that it loops 5 times through the map and adds a group to a random element
function refresh() {
    var contentArea = document.getElementById("content-area");
    contentArea.innerHTML = "<ul>";
    for (let w of workouts) {
        var [key, value] = w;
        value += (Math.floor(Math.random() * 2) + 1);
        contentArea.innerHTML += "<li>" + key + ": " + value*5 + " (<a href='#' onclick='remove(\"" + key + "\")'>x</a>)</li>";
    }
    contentArea.innerHTML += "</ul>";
    console.log(workouts);
    console.log(contentArea);
}