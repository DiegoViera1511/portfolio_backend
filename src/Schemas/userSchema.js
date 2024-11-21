import z from "zod"

const userSchema = z.object({
    name: z.string(),
    password: z.string()
})

export function validateUser(input) {
    return userSchema.safeParse(input)
}
