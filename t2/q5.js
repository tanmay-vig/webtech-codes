import express from "express";

const app = express();

let a = {
  n: "tanmay",
  email: "tanmay@gmail.com",
  password: "tanmay123",
  mobile: 1234567890,
  country: "India",
};

app.get("/", (req, res) => {
  res.send(a);
  res.end();
});

app.listen(3000, () => {
  console.log("server started");
});
