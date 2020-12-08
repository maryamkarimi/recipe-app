import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { getNutritionDetailByRecipeId } from '../service/recipe/index';
import '../App.css';
var i = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  media: {
    height: 360,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const NutritionInfoCard = ({id}) => {
  const classes = useStyles();
  const [nutrition, setNutrition] = useState(null);

  useEffect(() => {
    if (!nutrition) {
      getNutritionDetailByRecipeId(id).then((response) =>
        setNutrition(response)
      );
    }
  }, [nutrition]);

  return (
    nutrition && (
      <div>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h4' component='h2'>
              Nutrition Facts
            </Typography>
            <Typography variant='h6' component='h2'>
              Per 1 Serving
            </Typography>
            <Divider />
            <Typography variant='h5' component='h2'>
              Calories: {nutrition?.calories}
            </Typography>
            <Divider />

            <Typography variant='body2' component='p'>
              <b>Total Fat</b> {nutrition?.fat}
              <br />
              <Divider />
              Saturated Fat: {nutrition?.bad[2].amount}
              <Divider />
              <b>Cholesterol: </b> {nutrition?.bad[5].amount}
              <Divider />
              <b>Sodium: </b>
              {nutrition?.bad[6].amount}
              <Divider />
              <b>Total Carbohydrates</b> {nutrition?.carbs}
              <Divider />
              Sugar: {nutrition?.bad[1].amount}
              <Divider />
              <b>Protein: </b> {nutrition?.protein}
              <Divider />
              <Divider />
              <Divider />
            </Typography>
            <Typography variant='body2' component='p'>
              {nutrition?.good?.map((fact, index) => {
                return (
                  <div key={index}>
                    {fact.title}: <b>{fact.percentOfDailyNeeds}</b>
                    <Divider />
                  </div>
                );
              })}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    )
  );
};

export default NutritionInfoCard;
