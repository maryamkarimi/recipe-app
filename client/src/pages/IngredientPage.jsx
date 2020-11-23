import React, { useState } from 'react';
import {
  Badge, Row, Col, Button, Layout,
} from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import IngredientSideBar from '../components/IngredientSideBar';
import IngredientSearchBox from '../components/IngredientSearchBox';
import './IngredientPage.less';

const { Header, Content, Footer } = Layout;

const IngredientPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSelect = (newIngredient) => {
    setSelectedIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const handleDeselect = (removedIngredient) => {
    setSelectedIngredients(
      (prevIngredients) => prevIngredients.filter((ingredient) => ingredient !== removedIngredient),
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      handleSelect(e.target.value);
    } else {
      handleDeselect(e.target.value);
    }
  };

  const handleSearch = () => {
    // to be updated, we want to redirect to result page
    // getRecipeByIngredientsService(selectedIngredients, 5).then((r) => console.log(r));
  };

  const ingredientsCount = selectedIngredients.length === 1 ? 'Ingredient Selected' : 'Ingredients Selected';

  const footerButtons = (
    <div>
      <Button
        type="primary"
        size="large"
        icon={<RedoOutlined />}
        onClick={() => setSelectedIngredients([])}
      >
        Reset
      </Button>
      <Button type="primary" size="large" icon={<SearchOutlined />} onClick={() => handleSearch()}>
        Search
      </Button>
    </div>
  );

  return (
    <Layout className="search-by-ingredient">

      <Header className="header">
        <div className="header-app-name">App Name</div>
        <a href="/">Home</a>
        <a href="/recipe">Search by Recipe</a>
      </Header>

      <Content className="content">
        <Row>
          <Col xs={0} lg={5} style={{ zIndex: 2 }}>
            <IngredientSideBar
              handleCheckboxChange={handleCheckboxChange}
              selectedIngredients={selectedIngredients}
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

      <Footer className="footer">
        <Col xs={{ span: 24 }} lg={{ offset: 7, span: 16 }} className="footer-content">
          <Row>
            {selectedIngredients.length > 0 && (
            <>
              <div>
                <Badge count={selectedIngredients.length} />
              </div>
              <div className="footer-ingredient-count">
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
