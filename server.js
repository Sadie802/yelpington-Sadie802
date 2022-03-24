const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const cors = require('cors')
const restaurants = require('./api/restaurants.json')
const { json } = require('express/lib/response')
const res = require('express/lib/response')

//enables cross origin requests
app.use(cors())

//allows us to understand json
app.use(express.json());

//allows us to understand urlencoded payloads
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.json(restaurants)
})

//creating a function to find object in json data that matches url params and send back that data
app.get(`/:id`, (req, res) => {
    let id = req.params['id']
function findRestaurant(){
    for (i = 0; i < restaurants.length; i++){
        let data = restaurants[i].id;
        if (data === id){
            res.json(restaurants[i])
        }
    }
}
findRestaurant()
})

app.listen(port, () => {
    console.log("server listening on " + port)
})