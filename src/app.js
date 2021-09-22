const express = require('express');
const port = process.env.PORT || 7000; 
const path = require('path');
const hbs = require("hbs");

const app = express();
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));

hbs.registerPartials(partials_path);
app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
   res.render("Home");
});
app.get("/Download_1", (req, res) => {
   res.render("Download_1");
});
app.get("/Download_1", (req, res) => {
   res.render("Download_1");
});
app.get("/Download_2", (req, res) => {
   res.render("Download_2");
});

app.listen(port, ( )=> {
    console.log(`Server is running at PORT No. ${port}`);
})

