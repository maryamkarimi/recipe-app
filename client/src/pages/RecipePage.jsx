import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, Input, Pagination, Button } from 'antd';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Container,
} from '@material-ui/core';
import '../styles/RecipePage.less';

// TODO - get recipe data using API
import { getRecipeByBasicSearchService } from '../service/recipe/index';
import recipeData from '../data/dummyRecipes.json';

// Higher values -> less calls that can be made
const MAX_RESULTS = 24;
// I was going off of the figma diagram when choosing how many recipes to show
const PAGE_SIZE = 6;
const pageArray = (arr, pageNum, size) => {
  return arr.slice((pageNum - 1) * size, pageNum * size);
};

const recipeGrid = (recipeArr) => (
  <Grid
    container
    spacing={2}
    direction={'row'}
    justify={'flex-start'}
    alignItems={'flex-start'}>
    {recipeArr.map((recipe, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Card>
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
        </Card>
      </Grid>
    ))}
  </Grid>
);

const RecipePage = () => {
  const [recipes, setRecipes] = useState(recipeData.results);
  const [displayedRecipes, setDisplayedRecipes] = useState(pageArray(recipes, 1, PAGE_SIZE));
  const [rows, setRows] = useState(recipeGrid(displayedRecipes));
  const [searchTerms, setSearchTerms] = useState([]);
  const history = useHistory();
  const { location } = history;

  useEffect(() => {
    if (location.state !== null) {
      setSearchTerms(location.state);
      history.replace({
        state: null
      });
    }
  }, [history, location]);


  const search = (e) => {
    const searchTerm = e.target.value;
    e.target.value = '';

    // Calls the spoonacular API for a basic natural language search
    getRecipeByBasicSearchService(searchTerm, MAX_RESULTS).then(response => {
      setRecipes(response.results)
      const nextRecipeArr = pageArray(response.results, 1, PAGE_SIZE);
      setDisplayedRecipes(nextRecipeArr);
      setRows(recipeGrid(nextRecipeArr));
    });

    /* const nextRecipeArr = pageArray(recipes, 1, PAGE_SIZE);
    setDisplayedRecipes(nextRecipeArr);
    setRows(recipeGrid(nextRecipeArr)); */
  };

  return (
    <>
      <Row>
        <Col span={4}>
          <Button
            onClick={() => history.push('/')}>{`< Homepage`}</Button>
        </Col>
      </Row>
      <Row align='middle' gutter={[32, 24]} justify='center'>
        <Col span={12}>
          {/* TODO - Wire search functionality to API */}
          <Input size='large' placeholder='Search for recipes' allowClear onPressEnter={search} />
        </Col>
      </Row>
      <Container maxWidth={'md'}>{rows}</Container>
      <Row align='middle' gutter={[32, 24]} justify='center'>
        <Col>
          <Pagination
            defaultCurrent={1}
            total={recipes.length}
            pageSize={PAGE_SIZE}
            onChange={
              (page, pageSize) => {
                const nextRecipeArr = pageArray(recipes, page, pageSize);
                setDisplayedRecipes(nextRecipeArr);
                setRows(recipeGrid(nextRecipeArr));
              }
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default RecipePage;
