var workouts = new Map();

function update() {
    let type = document.getElementById("workout-input");
    if (type.value != "") {
        workouts.set(type.value,0);
        type.value = "";
        refresh();
    }
}

function refresh() {
    var contentArea = document.getElementById("content-area");
    contentArea.innerHTML = "<ul>";
    for (let w of workouts) {
        var [key, value] = w;
        value += 5 * (Math.floor(Math.random() * 2) + 1);
        contentArea.innerHTML += "<li>" + key + ": " + value + "</li>";
    }
    contentArea.innerHTML += "</ul>";
    console.log(workouts);
    console.log(contentArea);
}