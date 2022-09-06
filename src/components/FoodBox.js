import React from 'react';
import { Card, Col, Button } from 'antd';

const FoodBox = ({ food }) => {
  const sum = () => food.calories * food.servings;

  const handleDeleteFood = () => {
    console.log('delete'); //- só para verificar se o botao esta funcionando
  };

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {sum()}</b> kcal
        </p>
        <Button type="primary" onClick={handleDeleteFood}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
