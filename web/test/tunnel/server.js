import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("yooo");
});

app.listen("3003", () => console.log(`http://localhost:3003`));
