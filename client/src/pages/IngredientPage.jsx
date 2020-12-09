import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Badge, Row, Col, Button, Layout } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import IngredientSideBar from '../components/IngredientSideBar';
import IngredientSearchBox from '../components/IngredientSearchBox';
import '../styles/IngredientPage.less';

import categories from '../data/ingredientsByCategory.json';

const allCategories = categories.map((category) => {
  return category.category_name;
});

let ingredientToCategory = {};

categories.forEach((category) => {
  const ingredients = category.ingredients.map((ingredient) => ingredient.name);
  ingredientToCategory[category.category_name] = ingredients;
});

const findCategoryByIngredient = (ingredient) => {
  return Object.keys(ingredientToCategory).find((key) =>
    ingredientToCategory[key].includes(ingredient)
  );
};

const initialSelectedIngredients = allCategories.reduce((obj, val) => {
  obj[val] = 0;
  return obj;
}, {});

const { Header, Content, Footer } = Layout;

const IngredientPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [
    selectedIngredientPerCategory,
    setSelectedIngredientPerCategory,
  ] = useState(initialSelectedIngredients);

  const history = useHistory();

  const updateSelectIngredientPerCategory = (category, isSelected) => {
    let updatedSelectedIngredientPerCategory = Object.assign(
      {},
      selectedIngredientPerCategory
    );
    if (isSelected) updatedSelectedIngredientPerCategory[`${category}`] += 1;
    else updatedSelectedIngredientPerCategory[`${category}`] -= 1;

    setSelectedIngredientPerCategory(updatedSelectedIngredientPerCategory);
  };

  const handleSelect = (newIngredient) => {
    const category = findCategoryByIngredient(newIngredient);
    updateSelectIngredientPerCategory(category, true);
    setSelectedIngredients((prevIngredients) => [
      ...prevIngredients,
      newIngredient,
    ]);
  };

  const handleDeselect = (removedIngredient) => {
    const category = findCategoryByIngredient(removedIngredient);
    updateSelectIngredientPerCategory(category, false);
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== removedIngredient)
    );
  };

  const handleCheckboxChange = (selectedCategory, e) => {
    if (e.target.checked) {
      handleSelect(e.target.value);
      updateSelectIngredientPerCategory(selectedCategory, true);
    } else {
      handleDeselect(e.target.value);
      updateSelectIngredientPerCategory(selectedCategory, false);
    }
  };

  const handleSearch = () => {
    // to be updated, we want to redirect to result page
    // getRecipeByIngredientsService(selectedIngredients, 5).then((r) => console.log(r));
    history.push({
      pathname: '/recipe',
      state: {
        selectedIngredients,
      },
    });
  };

  const ingredientsCount =
    selectedIngredients.length === 1
      ? 'Ingredient Selected'
      : 'Ingredients Selected';

  const footerButtons = (
    <div>
      <Button
        type='primary'
        size='large'
        icon={<RedoOutlined />}
        onClick={() => {
          setSelectedIngredients([]);
          setSelectedIngredientPerCategory(initialSelectedIngredients);
        }}>
        Reset
      </Button>
      <Button
        type='primary'
        size='large'
        icon={<SearchOutlined />}
        onClick={() => handleSearch()}>
        Search
      </Button>
    </div>
  );

  return (
    <Layout className='search-by-ingredient'>
      <Header className='header'>
        <a href='/' className='header-app-name'>
          App Name
        </a>
        <a href='/recipe'>Search by Recipe</a>
      </Header>

      <Content className='content'>
        <Row>
          <Col xs={0} lg={5} style={{ zIndex: 2 }}>
            <IngredientSideBar
              handleCheckboxChange={(selectedCategory, event) =>
                handleCheckboxChange(selectedCategory, event)
              }
              selectedIngredients={selectedIngredients}
              selectedIngredientPerCategory={selectedIngredientPerCategory}
            />
          </Col>
          <Col xs={{ offset: 2, span: 20 }} lg={{ offset: 2, span: 15 }}>
            <IngredientSearchBox
              handleDeselect={handleDeselect}
              handleSelect={handleSelect}
              selectedIngredients={selectedIngredients}
            />
          </Col>
        </Row>
      </Content>

      <Footer className='footer'>
        <Col
          xs={{ span: 24 }}
          lg={{ offset: 7, span: 16 }}
          className='footer-content'>
          <Row>
            {selectedIngredients.length > 0 && (
              <>
                <div>
                  <Badge count={selectedIngredients.length} />
                </div>
                <div className='footer-ingredient-count'>
                  {ingredientsCount}
                </div>
              </>
            )}
          </Row>
          {footerButtons}
        </Col>
      </Footer>
    </Layout>
  );
};

export default IngredientPage;
