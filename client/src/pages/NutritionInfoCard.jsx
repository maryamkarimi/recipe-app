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
import Divider from '@material-ui/core/Divider';
import '../App.css';
var i = 0;
const data = {
	"calories": "316",
    "carbs": "49g",
    "fat": "12g",
    "protein": "3g",
    "bad": [
        {
            "amount": "316",
            "indented": false,
            "percentOfDailyNeeds": 15.84,
            "title": "Calories"
        },
        {
            "amount": "12g",
            "indented": false,
            "percentOfDailyNeeds": 18.51,
            "title": "Fat"
        },
        {
            "amount": "3g",
            "indented": true,
            "percentOfDailyNeeds": 24.88,
            "title": "Saturated Fat"
        },
        {
            "amount": "49g",
            "indented": false,
            "percentOfDailyNeeds": 16.44,
            "title": "Carbohydrates"
        },
        {
            "amount": "21g",
            "indented": true,
            "percentOfDailyNeeds": 24.42,
            "title": "Sugar"
        },
        {
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 0.63,
            "title": "Cholesterol"
        },
        {
            "amount": "279mg",
            "indented": false,
            "percentOfDailyNeeds": 12.13,
            "title": "Sodium"
        }
    ],
    "good": [
        {
            "amount": "3g",
            "indented": false,
            "percentOfDailyNeeds": 7.57,
            "title": "Protein"
        },
        {
            "amount": "19\u00b5g",
            "indented": false,
            "percentOfDailyNeeds": 18.76,
            "title": "Vitamin K"
        },
        {
            "amount": "0.37mg",
            "indented": false,
            "percentOfDailyNeeds": 18.69,
            "title": "Manganese"
        },
        {
            "amount": "0.15mg",
            "indented": false,
            "percentOfDailyNeeds": 10.02,
            "title": "Vitamin B1"
        },
        {
            "amount": "2g",
            "indented": false,
            "percentOfDailyNeeds": 9.97,
            "title": "Fiber"
        },
        {
            "amount": "37\u00b5g",
            "indented": false,
            "percentOfDailyNeeds": 9.48,
            "title": "Folate"
        },
        {
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 7.62,
            "title": "Iron"
        },
        {
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 7.48,
            "title": "Vitamin B3"
        },
        {
            "amount": "0.12mg",
            "indented": false,
            "percentOfDailyNeeds": 7.34,
            "title": "Vitamin B2"
        },
        {
            "amount": "5mg",
            "indented": false,
            "percentOfDailyNeeds": 7.26,
            "title": "Vitamin C"
        },
        {
            "amount": "4\u00b5g",
            "indented": false,
            "percentOfDailyNeeds": 6.26,
            "title": "Selenium"
        },
        {
            "amount": "182mg",
            "indented": false,
            "percentOfDailyNeeds": 5.21,
            "title": "Potassium"
        },
        {
            "amount": "43mg",
            "indented": false,
            "percentOfDailyNeeds": 4.38,
            "title": "Calcium"
        },
        {
            "amount": "42mg",
            "indented": false,
            "percentOfDailyNeeds": 4.24,
            "title": "Phosphorus"
        },
        {
            "amount": "13mg",
            "indented": false,
            "percentOfDailyNeeds": 3.43,
            "title": "Magnesium"
        },
        {
            "amount": "0.48mg",
            "indented": false,
            "percentOfDailyNeeds": 3.19,
            "title": "Vitamin E"
        },
        {
            "amount": "0.06mg",
            "indented": false,
            "percentOfDailyNeeds": 3.11,
            "title": "Copper"
        },
        {
            "amount": "0.26mg",
            "indented": false,
            "percentOfDailyNeeds": 2.56,
            "title": "Vitamin B5"
        },
        {
            "amount": "0.05mg",
            "indented": false,
            "percentOfDailyNeeds": 2.32,
            "title": "Vitamin B6"
        },
        {
            "amount": "0.29mg",
            "indented": false,
            "percentOfDailyNeeds": 1.96,
            "title": "Zinc"
        },
        {
            "amount": "76IU",
            "indented": false,
            "percentOfDailyNeeds": 1.53,
            "title": "Vitamin A"
        }
    ]    
}

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

const NutritionInfoCard = (props) => {
    const classes = useStyles();
  return ( <div> 

    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h4" component="h2">
            Nutrition Facts   
        </Typography>
        <Typography variant="h6" component="h2">
            Per 1 Serving
        </Typography>
        <Divider />
        <Typography variant="h5" component="h2">
          Calories: {data.calories}
        </Typography>
        <Divider />

        <Typography variant="body2" component="p">
          <b>Total Fat</b> {data.fat}
          <br />
        <Divider />
        <p class="indent">Saturated Fat: {data.bad[2].amount}
        <Divider />
        <b>Cholesterol: </b> {data.bad[5].amount}
        <Divider />
        <b>Sodium: </b>{data.bad[6].amount}
        <Divider />
        <b>Total Carbohydrates</b> {data.carbs}
        <Divider />
        <p class="indent">Sugar: {data.bad[1].amount}
        <Divider />
        <b>Protein: </b> {data.protein}
        </p>
        </p>
        <Divider />
        <Divider />
        <Divider />
        </Typography>
        <Typography variant="body2" component="p">
            {data.good[1].title}: <b>{data.good[1].percentOfDailyNeeds}%</b>
            <Divider />
            {data.good[2].title}: <b>{data.good[2].percentOfDailyNeeds}%</b>
            <Divider />
            {data.good[3].title}: <b>{data.good[3].percentOfDailyNeeds}%</b>
            <Divider />
            {data.good[4].title}: <b>{data.good[4].percentOfDailyNeeds}%</b>
            <Divider />
            </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  </div>);
};

export default NutritionInfoCard;
