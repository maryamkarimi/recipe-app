import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import ingredients from '../data/ingredients.json';
import './IngredientSearchBox.less';

const { Option } = Select;

const IngredientSearchBox = ({ handleSelect, handleDeselect, selectedIngredients }) => {
  const options = ingredients.map((ingredient) => (
    <Option value={ingredient.name} key={ingredient.id}>
      {ingredient.name}
    </Option>
  ));

  return (
    <Select
      mode="multiple"
      size="large"
      placeholder="Select Ingredients ..."
      maxTagCount={25}
      onSelect={handleSelect}
      onDeselect={handleDeselect}
      className="ingredient-search-box"
      value={selectedIngredients}
      dropdownStyle={{ top: '10vh', position: 'fixed' }}
    >
      {options}
    </Select>
  );
};

IngredientSearchBox.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  handleDeselect: PropTypes.func.isRequired,
  selectedIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IngredientSearchBox;
