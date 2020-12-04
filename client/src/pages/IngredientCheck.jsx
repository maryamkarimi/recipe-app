import React, { useState } from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

const IngredientCheck = ({ ingredient }) => {
  const [selected, setSelected] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <Checkbox onChange={handleChange} style={{ textDecoration: selected ? 'line-through' : 'none' }}>
      {ingredient}
    </Checkbox>
  );
};

IngredientCheck.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default IngredientCheck;
