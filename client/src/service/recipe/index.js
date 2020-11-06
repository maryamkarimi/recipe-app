import { getApiKey, getApiUrl } from '../index';
import { handleError, pullOutJson } from '../handlers';

export const getRecipeByIngredientsService = (ingredientsList, recipeCount) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    const ingredients = ingredientsList.join(',+');
    const params = `ingredients=${ingredients}&number=${recipeCount}&apiKey=${getApiKey()}`;
    
    return fetch(
        encodeURI(`${getApiUrl()}/findByIngredients?${params}`),
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleError)
        .then(pullOutJson);
};