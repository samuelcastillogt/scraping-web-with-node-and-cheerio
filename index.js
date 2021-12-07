const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');
const ejs = require("ejs")

const getData = require("./src/getData.js")
const app = express()
app.use(express.static(path.resolve(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(8000, ()=>{
    console.log("listo")
})
const cheerio = require("cheerio")
const axios = require("axios")
const fs = require("fs")
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})
app.post("/analizar", (req, res)=>{
    const url = req.body.web
    getData(url).then((datos)=>{
        console.log(datos)
        res.render("resultado.ejs", {datos})
    })
})
