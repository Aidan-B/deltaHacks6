const axios = require('axios')
const qs = require('querystring')

const key = "b8c2b2f348ca45a4ad0ff7c49b8eea5e"

async function recipeApiCall(groceries) {
  
  try{
    const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients?"

    const vars = {
      ingredients: groceries.toString(),
      apiKey: key
    }
    const queryString = qs.stringify(vars)
    return axios.get(baseUrl + queryString)
  } catch(e) {
    throw(e);
  }
  
}



async function getRecipes(ingredient_list)
{
  try{
    let response = await recipeApiCall(ingredient_list);
    const data = response.data;
    const baseRecipeUrl = "https://spoonacular.com/recipes/";
    //console.log(data)
    recipe_titles = data.map(x => x.title);
    recipe_ids = data.map(x => x.id);
    recipe_links = [];
    
    for (let i = 0; i < 10; i++)
    {
        title = recipe_titles[i].split(' ');
        recipe_links[i] = baseRecipeUrl + title[0] + '-' + title[1] + '-' + recipe_ids[i];
    }
    var result = {};
    recipe_titles.forEach((recipe_titles, i) => result[recipe_titles] = recipe_links[i]);
    
    return result;
  } catch(e) {
    throw(e);
  }
  
}


ingredient_list = ["Vegan Bacon", "Whole Wheat Pasta", "Onions", "Butter", "Bananas", "Coke"]
getRecipes(ingredient_list).then((result) => {
  //Do your stuff here!
  console.log(result)

}).catch((result) => console.log(result.response.data));
