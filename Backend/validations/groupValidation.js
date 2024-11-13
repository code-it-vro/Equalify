const {z} = require("zod");

exports.createSchema = z.object({
    name : z.string().min(1,"Group name is required!")
})