import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import { getRecipeByIngredientsService } from './service/recipe'

function App() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getRecipeByIngredientsService(['apple', 'flour'], 2).then(r => setRecipes(r))
    }, [])

    return (
            <div className="App">
                {recipes.map((recipe) => (
                        console.log(recipe.title)
                ))}
            </div>
    )
}

export default App
