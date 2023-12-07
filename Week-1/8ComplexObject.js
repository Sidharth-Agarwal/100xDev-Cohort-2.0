const allUsers = [{
        firstName: "Sidharth",
        gender: "Male"
    },{
        firstName: "Raman",
        gender: "Male"
    },{
        firstName: "Priya",
        gender: "Female"
    }
]

for (let i = 0; i < allUsers.length; i++){
    if (allUsers[i]["gender"] == "Male") {
        console.log(allUsers[i]["firstName"]);
    }
}