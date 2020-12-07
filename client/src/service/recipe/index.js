import { getApiKey, getApiUrl } from '../index'
import { handleError, pullOutJson } from '../handlers'

export const getRecipeByIngredientsService = (ingredientsList, recipeCount) => {
    const headers = new Headers({
        'content-type': 'application/json'
    });

    const ingredients = ingredientsList.map(ingredients => ingredients.replace(/\s/g, '+')).join(',+');
    const params = `ingredients=${ingredients}&number=${recipeCount}`;

    return fetch(
        encodeURI(`https://${getApiUrl()}/recipes/findByIngredients?apiKey=${getApiKey()}&${params}`),
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleError)
        .then(pullOutJson);
}

// https://spoonacular.com/food-api/docs#Search-Recipes-Complex
export const getRecipeByBasicSearchService = (searchTerm, recipeCount) => {
    const headers = new Headers({
        'content-type': 'application/json'
    });

    const params = `query=${searchTerm.replace(/\s/g, '+')}&number=${recipeCount}`

    return fetch(
        encodeURI(`https://${getApiUrl()}/recipes/complexSearch?apiKey=${getApiKey()}&${params}`),
        {
            method: 'GET',
            headers
        }
    )
        .then(handleError)
        .then(pullOutJson);
}