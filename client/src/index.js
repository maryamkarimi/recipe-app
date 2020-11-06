import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import IngredientPage from './IngredientPage';
import RecipePage from './RecipePage';
import RecipeDetailPage from './RecipeDetailPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/recipe/:recipeId'>
          <RecipeDetailPage />
        </Route>
        <Route path='/recipe'>
          <RecipePage />
        </Route>
        <Route path='/ingredient'>
          <IngredientPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
