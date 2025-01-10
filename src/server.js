const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.MYSQL_ADDON_PORT;

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.json("Hello Word")
})

const userRoutes = require("./routes/userRoutes");
app.use("/Users", userRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
  });