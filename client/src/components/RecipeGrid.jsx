import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

const RecipeGrid = ({ recipeArr }) => {
  const history = useHistory();

  return (
    <Grid
      container
      spacing={2}
      direction={'row'}
      justify={'flex-start'}
      alignItems={'flex-start'}>
      {recipeArr.map((recipe, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card onClick={() => history.push(`/recipe/${recipe.id}`)}>
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
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeGrid;
