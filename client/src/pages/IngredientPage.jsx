import React from "react";
import { Collapse } from 'antd';

const { Panel } = Collapse

const testText = 'This is where the ingredients would go.';

const IngredientPage = () => {
  // I'm just copy and pasting the example from antd here for now
  return (
    <div>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        className="site-collapse-custom-collapse"
        ghost
      >
        <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
          <p>{testText}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
          <p>{testText}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
          <p>{testText}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default IngredientPage;
