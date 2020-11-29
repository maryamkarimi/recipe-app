import React, { useState } from "react";
import { Col, Row, Input, Pagination } from 'antd';

import '../styles/RecipePage.less';
import SelectionCard from '../components/SelectionCard';
// TODO - get recipe data using API
import recipeData from '../data/dummyRecipes.json'

// I was going off of the figma diagram when choosing how many recipes to show
const PAGE_SIZE = 6;
const pageArray = (arr, pageNum, size) => {
  return arr.slice((pageNum - 1) * size, pageNum * size);
}

const mapRows = (recipeArr) => {
  const rowsToDisplay = [];
  for (let i = 1; i <= Math.floor(PAGE_SIZE / 2); i++) {
    rowsToDisplay.push(
      <Row key={i} align='middle' gutter={[32, 24]} justify='center'>
        {
          pageArray(recipeArr, i, 2).map((recipe) => {
            return <Col key={recipe.id} span={6} >
              <SelectionCard
                selectionTitle={recipe.title}
                coverImage={
                  <div className='thumbnail-wrapper'>
                    <img className='thumbnail' src={recipe.image} alt={recipe.title} />
                  </div>
                }
                routePath={`/recipe/${recipe.id}`}
              />
            </Col>
          })
        }
      </Row>
    );
  }

  return rowsToDisplay;
}

const RecipePage = (ingredients) => {
  return <div>This is the recipe selection page</div>;
};

export default RecipePage;