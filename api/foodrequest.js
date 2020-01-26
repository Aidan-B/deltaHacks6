//To run this, use the below command:
//getFood("bread", ["vegan", "wheat-free", "and you dont know the keys dummy"], "").then((response) => {console.log(response)}).catch((response) => {console.log(response.response.data); return false});

const axios = require('axios')
const qs = require('querystring')

const id = "3dd635e1"
const key = "3652335158e41edd06f398a76a5e9e90"


//Foodname is the name as a string
//health is one of the pre-defined health categories
//calories is a range, formmated as: MIN+, MIN-MAX, or MAX

//returns a json promise
export async function requestFood(foodname, health, calories) {
    try {
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
    } catch (e) {
        throw(e);
    }
}

export async function getFood(foodName, healthLabel, calories = "") {
    try {
        let foodPromise = await requestFood(foodName, healthLabel, calories)
        let items = [];
        for (let i = 0; i < 3; i++) {
            let nutrientsPromise = await collectNutrientsInfo(foodPromise.data.hints[i], healthLabel)
        
            var match = true;
            var exists = [];
            for (let i = 0; i < nutrientsPromise.data.healthLabels.length && !exists; i++) {
                nutrientsPromise.data.healthLabels.forEach(element => {
                    if (nutrientsPromise.data.healthLabels[i] == healthLabel.toUpperCase())
                        exists[element] = true;
                });
                exists.forEach(element => {
                    if (!element)
                        match = false;
                })
            }
                
            if (match)
                items.push(foodPromise.data.hints[i].food.label)
       
        };
        return items;

    } catch (e) {
        throw (e);
    }
}

export async function collectNutrientsInfo(foodItem) {
    try {
        const vars = {
            app_id: id,
            app_key: key
        };
        const nutrientsUrl = "https://api.edamam.com/api/food-database/nutrients?" + qs.stringify(vars);
        
        const NutrientsRequest = {
            "ingredients": [
                {
                    "quantity": 1,
                    "measureURI": foodItem.measures[0].uri,
                    "foodId": foodItem.food.foodId
                }
            ]
        };
        
        return axios.post(nutrientsUrl, NutrientsRequest);
    } catch(e) {
        throw(e)
    }
}
    