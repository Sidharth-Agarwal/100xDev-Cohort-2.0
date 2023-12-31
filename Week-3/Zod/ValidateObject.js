const zod = require("zod")

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

function validateInput(obj) {
    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "sidharthagarwal.2003@gmail.com",
    password:"isAsecret :p"
})