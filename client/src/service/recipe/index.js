import { getApiKey, getApiUrl } from '../index';
import { handleError, pullOutJson } from '../handlers';

const headers = new Headers({
  'content-type': 'application/json',
});

export const getRecipeByIngredientsService = (ingredientsList, recipeCount) => {
  const ingredients = ingredientsList
    .map((ingredients) => ingredients.replace(/\s/g, '+'))
    .join(',+');
  const params = `ingredients=${ingredients}&number=${recipeCount}`;

  return fetch(
    encodeURI(
      `https://${getApiUrl()}/recipes/findByIngredients?apiKey=${getApiKey()}&${params}`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson);
};

// https://spoonacular.com/food-api/docs#Search-Recipes-Complex
export const getRecipeByBasicSearchService = (searchTerm, recipeCount) => {
  const queryTerms = searchTerm.replace(/\s/g, '+');
  const params = `query=${queryTerms}&number=${recipeCount}`;

  return fetch(
    encodeURI(
      `https://${getApiUrl()}/recipes/complexSearch?apiKey=${getApiKey()}&${params}`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson);
};

export const getRecipeDetailByRecipeId = (id) => {
  return fetch(
    encodeURI(
      `https://${getApiUrl()}/recipes/${id}/information?apiKey=${getApiKey()}&includeNutrition=true`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson);
};

export const getNutritionDetailByRecipeId = (id) => {
  return fetch(
    encodeURI(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${getApiKey()}`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson);
};

export const getImageByRecipeId = (id) => {
  return fetch(
    encodeURI(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${getApiKey()}`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson)
    .then((res) => {
      return res.image;
    });
};

export const getSimilarDishesByRecipeId = (id) => {
  return fetch(
    encodeURI(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${getApiKey()}&number=5`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson)
    .then((recipes) => {
      return Promise.all(
        recipes.map(async (recipe) => {
          const imageRes = await getImageByRecipeId(recipe.id);
          return { ...recipe, image: imageRes };
        })
      );
    });
};

export const getInstructionByRecipeId = (id) => {
  return fetch(
    encodeURI(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${getApiKey()}`
    ),
    { method: 'GET', headers }
  )
    .then(handleError)
    .then(pullOutJson);
};
