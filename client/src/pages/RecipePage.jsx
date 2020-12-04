import React, { useState } from "react";
import { Col, Row, Input, Pagination } from 'antd';

import '../styles/RecipePage.less';
import SelectionCard from '../components/SelectionCard';
// TODO - get recipe data using API
import recipeData from '../data/dummyRecipes.json'
import {Grid, Card, CardContent, Typography, CardHeader, CardMedia, Container} from "@material-ui/core";

// I was going off of the figma diagram when choosing how many recipes to show
const PAGE_SIZE = 6;
const pageArray = (arr, pageNum, size) => {
  return arr.slice((pageNum - 1) * size, pageNum * size);
}

const recipeGrid = (recipeArr) =>
    <Grid container spacing={2} direction={'row'} justify={'flex-start'} alignItems={'flex-start'}>
        {recipeArr.map((recipe, index) =>
            <Grid item xs={12} md={6} key={index}>
                <Card>
                    <CardMedia image={recipe.image} className={'recipe-card-img'} title={recipe.title}/>
                    <CardContent>
                        <Typography variant={'h5'} component={'h2'}>
                            {recipe.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )}
    </Grid>;

const RecipePage = () => {
  const [recipes, setRecipes] = useState(pageArray(recipeData, 1, PAGE_SIZE));
  const [rows, setRows] = useState(recipeGrid(recipes));

  return (
    <>
      <Row align='middle' gutter={[32, 24]} justify='center'>
        <Col span={12}>
          {/* TODO - Wire search functionality to API */}
          <Input size='large' placeholder='Search for recipes' allowClear />
        </Col>
      </Row>
        <Container maxWidth={'md'}>
            {rows}
        </Container>
      <Row align='middle' gutter={[32, 24]} justify='center'>
        <Col>
          <Pagination
            defaultCurrent={1}
            total={recipeData.length}
            pageSize={PAGE_SIZE}
            onChange={
              (page, pageSize) => {
                const nextRecipeArr = pageArray(recipeData, page, pageSize);
                setRecipes(nextRecipeArr);
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
