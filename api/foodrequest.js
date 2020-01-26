const axios = require('axios')
const qs = require('querystring')

const id = "3dd635e1"
const key = "3652335158e41edd06f398a76a5e9e90"


//Foodname is the name as a string
//health is one of the pre-defined health categories
//calories is a range, formmated as: MIN+, MIN-MAX, or MAX

//returns a json promise
export function requestFood(foodname, health, calories) {
    const baseUrl = "https://api.edamam.com/api/food-database/parser"
    const vars = {
        ingr: foodname,
        app_id: id,
        app_key: key
    }
    if (health != "") {
        vars.health = health;
    }
    if (calories != "") {
        vars.calories = calories;
    }

    const queryString = "?" + qs.stringify(vars)
    return axios.get(baseUrl + queryString)
}

export function checkItem(foodName, healthLabel) {
    let exists = false;

    axios.post('https://api.edamam.com/api/food-database/nutrients?&app_id=3dd635e1&app_key=3652335158e41edd06f398a76a5e9e90',
        {
            "ingredients": [
                {
                    "quantity": 1,
                    "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "foodId": "food_bnbh4ycaqj9as0a9z7h9xb2wmgat"
                }
            ]
        })

        .then(function (response) {
            //for (let i = 0; i < response.data.hint[0]['healthLabels'].length; i++) {
            //    if (response.data['hint'][0]['healthLabels'][0] == healthLabel)
            //        exists = true;
            //}
            //return exists;
        })
        .catch(function (error) {
            console.log(error);
        });
}