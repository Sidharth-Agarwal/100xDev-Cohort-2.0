const personArray = ["Sidharth", "Raman", "Priya"];
const genderArray = ["Male", "Male", "Female"];
numberOfUsers = personArray.length;

for (let i = 0; i < numberOfUsers; i++){
    if (genderArray[i] == "Male") {
        console.log(personArray[i]);
    }
}