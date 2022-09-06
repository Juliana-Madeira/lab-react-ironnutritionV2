import React, {useState} from 'react';
import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import './App.css';
import { Divider } from 'antd';

function App() {
  const [foodsList, setFoodsList] = useState(foods);
 
  const addNewFood = (newFood) => {
    const newFoodsList = [newFood, ...foodsList];
    setFoodsList(newFoodsList);
  }

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <Search/>
      <AddFoodForm addNewFood={addNewFood}/>
      <Divider style={{marginTop: '2.5em'}}>Food List</Divider>
      {foodsList.map((food, index) => {
        return(
        <div key={index}>
          {/* <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} /> */}
          <FoodBox food={food}/>
        </div>
        );
      })}
      {/* <FoodBox food={{name: 'Orange', calories: 85, image: 'https://i.imgur.com/abKGOcv.jpg', servings: 1}}/> */}
    </div>
  );
}

export default App;
