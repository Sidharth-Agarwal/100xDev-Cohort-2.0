const users = [{
    firstName: "Sidarth",
    gender: "Male"
},{
    firstName: "Raman",
    gender: "Male"
},{
    firstName: "Priya",
    gender: "Female"
}]

for(let i=0;i<users.length;i++){
    if(users[i]["gender"] == "Male"){
        console.log(users[i]["firstName"])
    }
}