import React, {useState} from 'react';
import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import './App.css';


function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [newFoods, setNewFoods] = useState('');

  const pushNewFood = (newFoodPushed) => {setNewFoods([...foodsList, newFoodPushed])}

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <h2>Food List</h2>
      {foodsList.map((food, index) => {
        return(
        <div key={index}>
          {/* <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} /> */}
          <FoodBox food={food}/>
        </div>
        );
      })}
      <AddFoodForm pushNewFood={pushNewFood}/>
      {/* <FoodBox food={{name: 'Orange', calories: 85, image: 'https://i.imgur.com/abKGOcv.jpg', servings: 1}}/> */}
    </div>
  );
}

export default App;
