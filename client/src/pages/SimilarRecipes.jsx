import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

import { getSimilarDishesByRecipeId } from '../service/recipe/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    maxHeight: 345,
    minHeight: 345,
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

const SimilarRecipes = ({ id }) => {
  const classes = useStyles();
  const [dishes, setDishses] = useState(null);

  useEffect(() => {
    if (!dishes) {
      getSimilarDishesByRecipeId(id).then((response) => setDishses(response));
    }
  }, [dishes]);

  return (
    dishes && (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <h1>Similar Dishes:</h1>
          </Grid>
          {dishes.map((recipe, ix) => (
            <Grid item xs={2} key={ix}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={recipe.image}
                    title={recipe.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {recipe.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      {'Ready in: ' + recipe.readyInMinutes + ' minutes!'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <br />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
};

export default SimilarRecipes;
