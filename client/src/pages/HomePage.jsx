import React from 'react';
import { Col, Row } from 'antd';

import '../styles/homepage.less';
import IngredientIcon from '../assets/ingredient-icon.png';
import RecipeIcon from '../assets/recipe-icon.png';
import SelectionCard from '../components/SelectionCard';

const HomePage = () => {

  return (
    <>
      <Row align='middle' className={'homepageRoot'}>
        <Col span={16} offset={4}>
          <SelectionCard
            selectionTitle='Search By Ingredients'
            coverImage={
              <div className={'iconsWrapper'}>
                <img
                  className={'icons'}
                  alt='ingredient-icon'
                  src={IngredientIcon}
                />
              </div>
            }
            routePath={'/ingredient'}
          />
        </Col>
        <Col span={16} offset={4}>
          <SelectionCard
            className={'cardWrapper'}
            selectionTitle='Search By Recipe'
            coverImage={
              <div className={'iconsWrapper'}>
                <img className={'icons'} alt='recipe-icon' src={RecipeIcon} />
              </div>
            }
            routePath={'/recipe'}
          />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
