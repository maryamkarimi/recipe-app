import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import IngredientCheck from "./IngredientCheck"
import { getInstructionByRecipeId } from '../service/recipe/index';

const InstructionsList = ({ id }) => {
  const [instructions, setInstuctions] = useState(null);

  useEffect(() => {
    if (!instructions) {
      getInstructionByRecipeId(id).then((response) => setInstuctions(response));
    }
  }, [instructions]);

  return instructions && (
    <div>
      <Row>
        <h1>Instructions</h1>
      </Row>
    
        {instructions[0].steps.map((step, i) => (
            <Row key={i}>
           <IngredientCheck ingredient={`${step.step}`} />
           </Row>
        ))}
      
    </div>
  );
};

export default InstructionsList;
