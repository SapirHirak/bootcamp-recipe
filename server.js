const request = require('request')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, respond) {
    respond.send("OK")

})


app.get('/recipes/:ingredient', function (req, respond) {
    let ingredient = req.params.ingredient //will be the ingredient name
    let releventData = []
    console.log(ingredient)
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, res ) { //for full API

        let data = JSON.parse( res.body).results
        //players = players.filter(p => p.teamId == teamToIDs[player] & p.isActive)
        for (let u of data) {
            releventData.push({ title: u.title} , {thumbnail: u.thumbnail} , {href: u.href} , {ingredients: u.ingredients} )
        }
    respond.send(releventData)
})
})

const port = 8080
app.listen(port, function () {
    console.log("server is running on port " + port)
})


