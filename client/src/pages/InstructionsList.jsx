import React, { useState, useEffect } from 'react';
import { Row } from 'antd';

import { getInstructionByRecipeId } from '../service/recipe/index';

const InstructionsList = ({ id }) => {
  const [instuctions, setInstuctions] = useState(null);

  useEffect(() => {
    if (!instuctions) {
      getInstructionByRecipeId(id).then((response) => setInstuctions(response));
    }
  }, [instuctions]);

  return instuctions && (
    <div>
      <Row>
        <h1>Instuctions</h1>
      </Row>
      <ol>
        {instuctions[0].steps.map((step, i) => (
          <li key={i} style={{ textAlign: 'left' }}>
            {step.step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
