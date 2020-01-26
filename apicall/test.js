const axios = require('axios')
const qs = require('querystring')

const id = "3dd635e1"
const key = "3652335158e41edd06f398a76a5e9e90"


//Foodname is the name as a string
//health is one of the pre-defined health categories
//calories is a range, formmated as: MIN+, MIN-MAX, or MAX
function requestFood(foodname, health, calories) {
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
  console.log(baseUrl + queryString)
  return axios.get(baseUrl + queryString)
}

  
name = "Bacon";
health = ["vegan"];
calories = ""

requestFood(name, health, calories).then(function (response) {
  let data = response.data;
  console.log(data);
})
.catch(function (error) {
  console.log(error);
});


/*
requestFood('bread').then((response) => {
  const data = response.data
  console.log(JSON.stringify(data))
  // console.log(data.result.map(x => x.name))
})
// console.log([1, 2, 3].map(x => x * 2))
// console.log([{ x: 5 }, { x: 2 }].map(y => y.x))
*/

