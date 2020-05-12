const client = stitch.Stitch.initializeDefaultAppClient('dailyworkout-kgzuu');

const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('dailyWorkout');



var form = document.getElementById("form");

function handleForm(event) { 
    event.preventDefault(); 
} 

form.addEventListener('submit', handleForm);

let exercises = {};
client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(() =>
  db.collection('exercises').find().asArray()
).then(docs => {
    if (docs.length > 0) {
        document.getElementById("workout-container").removeAttribute("hidden");
        let exerciseList = document.getElementById("workout-list");
        exercises = docs;
        for (let exercise of exercises) {
            exerciseList.innerHTML += "<li>" + exercise["name"] + "</li>";
        }
    }
}).catch(err => {
  console.error(err)
});

function generate() {
  console.log(exercises);
}