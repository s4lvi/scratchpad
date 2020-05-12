const client = stitch.Stitch.initializeDefaultAppClient('dailyworkout-kgzuu');

const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('dailyWorkout');



var form = document.getElementById("form");

function handleForm(event) { 
    event.preventDefault(); 
} 

form.addEventListener('submit', handleForm);


function generate() {
  let exercises = {};
  client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(() =>
    db.collection('exercises').find().asArray()
  ).then(docs => {
      if (docs.length > 0) {
          document.getElementById("workout-container").removeAttribute("hidden");
          let exerciseListElement = document.getElementById("workout-list");
          exerciseListElement.innerHTML = "";
          exercises = docs;
          let exerciseSubset = [];
          for (let i = 0; i < document.getElementById("num-exercises").value; i++) {
            let index = Math.floor(Math.random() * exercises.length);
            index = index >= exercises.length ? exercises.length : index;
            console.log(index);
            exerciseSubset.push(exercises[index]);
            exercises.splice(index, 1);
          }
          let sets = 5;
          for (let exercise of exerciseSubset) {
              let totalSets = sets; //Math.round(Math.random()) + sets;
              exerciseListElement.innerHTML += "<li>" + exercise["name"] + " - " + totalSets + " sets of " + exercise["repetitions"] + "</li>";
          }
      }
  }).catch(err => {
    console.error(err)
  });
}