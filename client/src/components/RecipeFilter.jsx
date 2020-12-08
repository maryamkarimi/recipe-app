import React, { useEffect, useState, useRef } from 'react';
import PropTypes, { any } from 'prop-types';
import { Input } from 'antd';
import { debounce } from 'debounce';

import '../styles/RecipeFilter.less';

const RecipeFilter = ({ recipes, updateRecipe, updateDisplay }) => {
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    updateRecipe(filteredRecipe);
    updateDisplay(filteredRecipe);
  }, [filterTerm]);

  const filteredRecipe = recipes.filter((recipe) => {
    const { title } = recipe;
    return title.toLowerCase().includes(filterTerm);
  });

  const handleOnChange = debounce((text) => setFilterTerm(text), 300);

  return (
    <div className='recipe-filter-root'>
      <div className='filter-text'>
        <b>Filter: </b>
      </div>
      <Input
        size='large'
        placeholder='Filter'
        onChange={(e) => {
          e.persist();
          handleOnChange(e.target.value);
        }}
        allowClear
      />
    </div>
  );
};

RecipeFilter.propTypes = {
  // Normally I'd put the recipe type inside here but I'm too lazy to define it ¯\_(ツ)_/¯
  recipes: PropTypes.arrayOf(any).isRequired,
  updateRecipe: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default RecipeFilter;
