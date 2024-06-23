import express from "express";

const app = express();
const port = 3000; 

app.use(express.static("public"));

function logger(req, res, next){
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    next();
};
  
app.use(logger);

app.get("/", (req, res) => {
  res.render("main.ejs");
}); 

app.get("/login", (req, res) => {
  res.render("login.ejs");
}); 

app.get("/registration", (req, res) => {
  res.render("registration.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});