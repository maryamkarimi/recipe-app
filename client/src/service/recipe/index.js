import { getApiKey, getApiUrl } from '../index'
import { handleError, pullOutJson } from '../handlers'

export const getRecipeByIngredientsService = (ingredientsList, recipeCount) => {
    const headers = new Headers({
        'content-type': 'application/json',
        'x-rapidapi-host': getApiUrl(),
        'x-rapidapi-key': getApiKey()
    })

    const ingredients = ingredientsList.join(',+')
    const params = `ingredients=${ingredients}&number=${recipeCount}`

    return fetch(
            encodeURI(`https://${getApiUrl()}/recipes/findByIngredients?${params}`),
            {
                method: 'GET',
                headers,
            },
    )
    .then(handleError)
    .then(pullOutJson)
}