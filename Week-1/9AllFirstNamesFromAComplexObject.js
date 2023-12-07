const allUsers = [{
    firstName: "Sidharth",
    lastName: "Agarwal",
    gender: "Male"
}, {
    firstName: "Raman",
    lastName: "Kumar",
    gender: "Male"
}, {
    firstName: "Priya",
    lastName: "Yadav",
    gender: "Female"
}
]

for (let i = 0; i < allUsers.length; i++){
    if (allUsers[i]["firstName"]) {
        console.log(allUsers[i]["firstName"]);
    }
}