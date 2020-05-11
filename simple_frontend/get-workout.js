const client = stitch.Stitch.initializeDefaultAppClient('dailyworkout-kgzuu');

const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('dailyWorkout');

client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(() =>
  db.collection('exercises').find().asArray()
).then(docs => {
    let exerciseList = document.getElementById("workout-list");
    let selectedExercises = docs;
    for (let exercise of selectedExercises) {
        exerciseList.innerHTML += "<li>" + exercise["name"] + "</li>";
    }
}).catch(err => {
  console.error(err)
});