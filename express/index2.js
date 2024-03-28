const express = require("express");

const app = express();

const courses = [
    { id: 1, name: "English" },
    { id: 2, name: "Maths" },
    { id: 3, name: "Hindi" },
  ];
  

app.get("/", (req, res) => {
  res.send("I am Practicing Express.js!");
});


app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send("The course with the given ID was not found.");
    res.send(course);
});

app.listen(3000, () => {
  console.log("Listening");
});
