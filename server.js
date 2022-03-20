const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const cors = require('cors')
const restaurants = require('./api/restaurants.json')
const { json } = require('express/lib/response')
const res = require('express/lib/response')


app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.json(restaurants)
})

app.get(`/:id`, (req, res) => {
    let id = req.params['id']
function findRestaurant(){
    for (i = 0; i < restaurants.length; i++){
        let data = restaurants[i].id;
        if (data === id){
            res.send(data)
        }
    }
}
findRestaurant()
})

app.listen(port, () => {
    console.log("server listening on " + port)
})