const axios = require('axios')
const qs = require('querystring')

const id = "knc7bJh4"
const secret = "TSX4W7lksxqgid74wJLh5G4raloErMMS"

function requestFood(foodname) {
  const baseUrl = "https://api.iamdata.co/v1/products/"
  const vars = {
    per_page: 50,
    name: foodname,
    client_id: id,
    client_secret: secret
  }
  const queryString = "?" + qs.stringify(vars)
  //console.log(queryString)
  return axios.get(baseUrl + queryString)
}

requestFood('bread').then((response) => {
  const data = response.data
  console.log(data)
  // console.log(data.result.map(x => x.name))
})

// console.log([1, 2, 3].map(x => x * 2))
// console.log([{ x: 5 }, { x: 2 }].map(y => y.x))
