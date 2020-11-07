import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const SelectionCard = ({ coverImage, selectionTitle, routePath }) => {
  const history = useHistory();
  
  const bodyStyle = {
    backgroundColor: '#14213D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 0px 8px 8px',
  };

  const metaStyle = {
    color: '#FFFFFF',
    fontWeight: 'bold',
  };

  return (
    <Card cover={coverImage} bordered={false} bodyStyle={bodyStyle} onClick={() => history.push(routePath)}>
      <Meta title={<div style={metaStyle}>{selectionTitle}</div>} />
    </Card>
  );
};

export default SelectionCard;
