import React, { useState } from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';
import IngredientCheck from './IngredientCheck';

const IngredientsList = ({ ingredients, servingSize }) => {
  const origServingSize = servingSize;
  const [scaledServings, addServe] = useState(servingSize);

  // var servingMultiplier = React.useState(servingMultiplier, setServingMultiplier)

  const addServing = () => {
    addServe(scaledServings + 1);
  };

  const removeServing = () => {
    if (scaledServings > 1) {
      addServe(scaledServings - 1);
    }
  };

  return (
    <div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <h1>Ingredients</h1>

        <Row>
          <h3>Serving Size:</h3>
          <DownIcon color={scaledServings <= 1 ? "primary" : "secondary"} fontSize="default" onClick={removeServing}/>
          <h3>{scaledServings}</h3>
          <UpIcon color="secondary" fontSize="default" onClick={addServing} />

        </Row>
      </div>
      {ingredients.map((ingredient, ix) => (
        <Row key={ix}>
          <IngredientCheck ingredient={`${ingredient.measures.us.amount * (scaledServings / origServingSize)} ${ingredient.measures.us.unitShort} ${ingredient.name}`} />
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
