const axios = require("axios")
const cheerio = require("cheerio")
const getData = async(url)=>{
    const {data} = await axios.get(url)
    const $ = cheerio.load(data)
    const body = $("body")
    const titulos = $("h2")
    const title = $("title").text()
    const hache1 = $("h1")
    const negritas = $("b")
    const stronge = $("stronge")
    const img = $("img").attr("alt")
    console.log(img)
    const h1 = []
    const h2 = []
    const b =[]
    const alternativo =[]
    negritas.each((idx, el)=>{
        const titulo = $(el).text()
        alternativo.push(titulo)
    })
    stronge.each((idx, el)=>{
        const titulo = $(el).text()
        b.push(titulo)
    })
    hache1.each((idx, el)=>{
        const titulo = $(el).text()
        h1.push(titulo)
    })
    titulos.each((idx, el)=>{
        const titulo = $(el).text()
        h2.push(titulo)
    })
    const datos ={
        h1: h1,
        h2: h2,
        Negritas: b,
        alt: alternativo,
        title: title
    }
    return datos

}
module.exports = getData