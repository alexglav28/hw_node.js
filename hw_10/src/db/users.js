import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALT_ROUNDS || 10);

const passwordHashUser = bcrypt.hashSync("123456", saltRounds);
const passwordHashAdmin = bcrypt.hashSync("admin123", saltRounds);

export const users = [
  {
    id: 1,
    username: "alex",
    email: "user@example.com",
    password: passwordHashUser,
    role: "user",
  },
  {
    id: 2,
    username: "admin",
    email: "admin@example.com",
    password: passwordHashAdmin,
    role: "admin",
  },
];
