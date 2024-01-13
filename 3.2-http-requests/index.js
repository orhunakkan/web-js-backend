import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("This is the home page");
});

app.get("/contact", (req, res) => {
    res.send("This is the contact page");
});

app.get("/about", (req, res) => {
    res.send("This is about Orhun");
});

app.listen(3000, () => {
    console.log("Server Started on port 3000");
})