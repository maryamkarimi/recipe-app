import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeartIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import { Layout } from 'antd';

import NutritionInfoCard from './NutritionInfoCard';
import SimilarRecipes from './SimilarRecipes';
import InstructionsList from './InstructionsList';
import IngredientsList from './IngredientsList';
import { getRecipeDetailByRecipeId } from '../service/recipe/index';

const { Header } = Layout;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mainContainer: {
    paddingTop: '80px',
    minHeight: 500,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  mainInfo: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height:"100%",
    color: theme.palette.text.primary,
  },
  nutInfo: {
    padding: theme.spacing(1),
    textAlign: 'left',
    height:"100%",
    color: theme.palette.text.primary,
  },
  detailInfo: {
    padding: theme.spacing(1),
    textAlign: 'left',
    height:"100%",
    color: theme.palette.text.primary,
  },
  recipeImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const RecipeDetailPage = () => {
  const classes = useStyles();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!recipe) {
      getRecipeDetailByRecipeId(recipeId).then((response) =>
        setRecipe(response)
      );
    }
  }, [recipe]);

  return (
    recipe && (
      <>
        <Header className='header'>
          <a href='/' className='header-app-name'>
            App Name
          </a>
          <a href='/recipe'>Search by Recipe</a>
          <a href='/ingredient'>Search by Ingredient</a>
        </Header>

        <div className={classes.mainContainer}>
          <Grid container spacing={3}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Paper className={classes.paper}>
                <h1>{recipe.title}</h1>
              </Paper>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Paper className={classes.paper}>
                <Typography variant='h5' gutterBottom>
                  <b>{`${recipe?.aggregateLikes} Likes`}</b>{' '}
                  <HeartIcon color='secondary' fontSize='medium' />
                  Tasty Score: <b>{recipe?.spoonacularScore}</b>
                  Health Score: <b>{recipe?.healthScore}</b>
                  Weight Watchers Smart Points:{' '}
                  <b>{recipe?.weightWatcherSmartPoints}</b>
                  Vegetarian:{' '}
                  {recipe?.vegetarian ? (
                    <CheckIcon color='secondary' fontSize='default' />
                  ) : (
                    <CloseIcon color='primary' fontSize='default' />
                  )}
                  Gluten Free:{' '}
                  {recipe?.glutenFree ? (
                    <CheckIcon color='secondary' fontSize='default' />
                  ) : (
                    <CloseIcon color='primary' fontSize='default' />
                  )}
                  Ketogenic:{' '}
                  {recipe?.ketogenic ? (
                    <CheckIcon color='secondary' fontSize='default' />
                  ) : (
                    <CloseIcon color='primary' fontSize='default' />
                  )}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Paper className={classes.mainInfo}>
                <h3>This dish goes well with:</h3>
                {recipe?.winePairing.pairedWines?.map((wine, i) => (
                  <li key={i}>{wine}</li>
                ))}
                {recipe?.winePairing.productMatches?.map((wine, i) => (
                  <a href={wine.link} key={i}>
                    <img src={wine.imageUrl} />
                  </a>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.mainInfo}>
                <a href={recipe?.sourceUrl}>
                  <img
                    className={classes.recipeImage}
                    src={recipe?.image}
                    alt={recipe?.title}
                  />
                </a>
                <h3> Ready In: {recipe?.readyInMinutes} Minutes</h3>
              </Paper>
            </Grid>

            <Grid item xs={2}>
            <Paper className={classes.nutInfo}>
              <NutritionInfoCard id={recipeId} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <Paper className={classes.detailInfo}>
                <IngredientsList
                  ingredients={recipe?.extendedIngredients}
                  servingSize={recipe?.servings}
                />
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper className={classes.detailInfo}>
                <InstructionsList id={recipeId} />
              </Paper>
            </Grid>
          </Grid>

          <SimilarRecipes id={recipeId} />
        </div>
      </>
    )
  );
};

export default RecipeDetailPage;
