const express = require("express")
const app = express();
const zod = require("zod")
const port = 3000

// Create a zod schema that meet the following requirements

/*
email : string => @ . 
password : atleast 8 letters
country : "IN","US"
*/
const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})