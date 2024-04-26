const express = require("express");
const cors = require("cors");
const connection = require("./db/connection");
const cardRouter = require("./routes");

const PORT = 3000;
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", cardRouter);

app.listen(PORT, () => {
  console.log("Server Started at : ", PORT);
});
