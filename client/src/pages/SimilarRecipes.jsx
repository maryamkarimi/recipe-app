import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

var i = 0;
const data = [
    {
        "id": 209128,
        "title": "Dinner Tonight: Grilled Romesco-Style Pork",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html"
    },
    {
        "id": 31868,
        "title": "Dinner Tonight: Chickpea Bruschetta",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 2,
        "sourceUrl": "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 345,
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

const SimilarRecipes = (props) => {
    const classes = useStyles();
  return ( <div> 
     <Grid container spacing={1}>
        <Grid item xs = {1}></Grid>
        <Grid item xs = {2}><h1>Similar Dishes:</h1></Grid>
      {data.map((recipe, i)=>(
          
          <Grid item xs={2}>
               <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {recipe.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {"Ready in: " + recipe.readyInMinutes + " minutes!"}
                    </Typography>
                    </CardContent>
                </CardActionArea>
               </Card>
              <br></br>
              
          </Grid>
          
      ))}
    
      </Grid>
     
  </div>);
};

export default SimilarRecipes;
