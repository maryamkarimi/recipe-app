import React from 'react';
import { Checkbox, Menu } from 'antd';
import PropTypes from 'prop-types';
import categories from '../data/ingredientsByCategory.json';
import FoodIcon from '../assets/icons/index';
import './IngredientSideBar.less';

const IngredientSideBar = ({
  selectedIngredients,
  selectedIngredientPerCategory,
  handleCheckboxChange,
}) => {
  return (
    <Menu
      selectedKeys={selectedIngredients}
      mode='inline'
      multiple
      className='ingredients-menu'>
      {categories.map((category) => {
        return (
          <Menu.SubMenu
            key={category.category_name}
            title={
              <span className='bold-text'>
                {category.category_name}{' '}
                {selectedIngredientPerCategory[category.category_name]}/
                {category.ingredients.length}{' '}
              </span>
            }
            icon={<FoodIcon category={category.category_name} />}>
            {category.ingredients.map((ingredient) => {
              return (
                <Menu.Item
                  key={ingredient.name}
                  style={{ marginBottom: '-10px' }}>
                  <Checkbox
                    value={ingredient.name}
                    onChange={(event) => {
                      return handleCheckboxChange(
                        category.category_name,
                        event
                      );
                    }}
                    checked={selectedIngredients.includes(ingredient.name)}
                    className='menu-item-checkbox'>
                    {ingredient.name}
                  </Checkbox>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        );
      })}
    </Menu>
  );
};
IngredientSideBar.propTypes = {
  selectedIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIngredientPerCategory: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default IngredientSideBar;
