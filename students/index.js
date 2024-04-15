const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const port = 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const studentRouter = require("./controller/student.controller");


app.use("/students", studentRouter);


app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);