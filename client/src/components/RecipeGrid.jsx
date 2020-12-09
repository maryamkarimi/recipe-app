import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:250,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const RecipeGrid = ({ recipeArr }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction={'row'}
      justify={'flex-start'}
      alignItems={'flex-start'}>
      {recipeArr.map((recipe, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card onClick={() => history.push(`/recipe/${recipe.id}`)} className={classes.root}>
            <CardActionArea>
              <CardMedia
                image={recipe.image}
                className={'recipe-card-img'}
                title={recipe.title}
              />
              <CardContent>
                <Typography variant={'h5'} component={'h2'}>
                  {recipe.title}
                </Typography>
                <Typography variant={'h5'} component={'h4'}>
                  {"Per Serving: Calories: ", recipe.calories, "Carbs: ", recipe.carbs}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeGrid;
