const axios = require('axios')
const qs = require('querystring')

const key = "b8c2b2f348ca45a4ad0ff7c49b8eea5e"

function recipeApiCall(groceries) {
  const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients?"

  const vars = {
    ingredients: groceries.toString(),
    apiKey: key
  }
  const queryString = qs.stringify(vars)
  console.log(queryString)
  return axios.get(baseUrl + queryString)
}

ingredient_list = ["Vegan Bacon", "Whole Wheat Pasta", "Onions", "Butter", "Bananas", "Coke"]


function getRecipes(ingredient_list)
{
    recipeApiCall(ingredient_list).then((response) => {
        const data = response.data
        const baseRecipeUrl = "https://spoonacular.com/recipes/"
        //console.log(data)
        recipe_titles = data.map(x => x.title)
        recipe_ids = data.map(x => x.id)
        recipe_links = []
        
        for (let i = 0; i < 10; i++)
        {
            title = recipe_titles[i].split(' ')
            recipe_links[i] = baseRecipeUrl + title[0] + '-' + title[1] + '-' + recipe_ids[i]
        }
      var result = {};
      recipe_titles.forEach((recipe_titles, i) => result[recipe_titles] = recipe_links[i]);
      console.log(result)
      return result;
      })
}

console.log(getRecipes(["Apples", "Bananas", "Ice Cream"]))