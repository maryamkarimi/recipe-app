import React from 'react';
import { Checkbox, Menu } from 'antd';
import PropTypes from 'prop-types';
import categories from '../data/ingredientsByCategory.json';
import FoodIcon from '../assets/icons/index';
import './IngredientSideBar.less';

const IngredientSideBar = ({ selectedIngredients, handleCheckboxChange }) => (
  <Menu
    selectedKeys={selectedIngredients}
    mode="inline"
    multiple
    className="ingredients-menu"
  >
    {categories.map((category) => (
      <Menu.SubMenu
        key={category.category_name}
        title={<span className="bold-text">{category.category_name}</span>}
        icon={<FoodIcon category={category.category_name} />}
      >
        {category.ingredients.map((ingredient) => (
          <Menu.Item key={ingredient.name} style={{ marginBottom: '-10px' }}>
            <Checkbox
              value={ingredient.name}
              onChange={handleCheckboxChange}
              checked={selectedIngredients.includes(ingredient.name)}
              className="menu-item-checkbox"
            >
              {ingredient.name}
            </Checkbox>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    ))}
  </Menu>
);

IngredientSideBar.propTypes = {
  selectedIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default IngredientSideBar;
