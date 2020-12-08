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
