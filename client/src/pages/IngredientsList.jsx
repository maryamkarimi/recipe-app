import React, { useState } from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';
import IngredientCheck from './IngredientCheck';

const IngredientsList = ({ ingredients, servingSize }) => {
  const [servingMultiplier, addServe] = useState(0);

  // var servingMultiplier = React.useState(servingMultiplier, setServingMultiplier)

  const addServing = () => {
    addServe(servingMultiplier + 1);
  };

  const removeServing = () => {
    if (servingMultiplier >= 0) {
      addServe(servingMultiplier - 1);
    }
  };

  return (
    <div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <h1>Ingredients</h1>

        <Row>
          <h3>Serving Size:</h3>
          <DownIcon color={servingSize + servingMultiplier<=1 ? "primary" : "secondary"} fontSize="medium" onClick={removeServing}/>
          <h3>{servingSize + servingMultiplier}</h3>
          <UpIcon color="secondary" fontSize="medium" onClick={addServing} />

        </Row>
      </div>
      {ingredients.map((ingredient) => (
        <Row>
          <IngredientCheck ingredient={`${ingredient.measures.us.amount * (servingSize + servingMultiplier)} ${ingredient.measures.us.unitShort} ${ingredient.name}`} />
        </Row>

      ))}
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  servingSize: PropTypes.number.isRequired,
};

export default IngredientsList;
