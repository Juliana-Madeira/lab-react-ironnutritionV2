import React, { useState } from 'react';
import { Input, Button } from 'antd';


const AddFoodForm = ({pushNewFood}) => {
    const [nameFoodEntry, setNameFoodEntry] = useState('');
    const [imageFoodEntry, setImageFoodEntry] = useState('');
    const [caloriesFoodEntry, setCaloriesFoodEntry] = useState('');
    const [servingsFoodEntry, setServingsFoodEntry] = useState('');
   

    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        pushNewFood({nameFoodEntry, imageFoodEntry, caloriesFoodEntry, servingsFoodEntry});
        setNameFoodEntry('');
        setImageFoodEntry('');
        setCaloriesFoodEntry('');
        setServingsFoodEntry('');
    }

  return (
    <div>
        <h1>Add Food Entry</h1>
        <form onSubmit={handleSubmit}>
            <Input
            placeholder='Name of Food'
            value={nameFoodEntry}
            type='text'
            onChange={(e) => setNameFoodEntry(e.target.value)}
            />
            <Input
            placeholder='Image Url'
            value={imageFoodEntry}
            type='text'
            onChange={(e) => setImageFoodEntry(e.target.value)}
            />
            <Input
            placeholder='Calories'
            value={caloriesFoodEntry}
            type='number'
            onChange={(e) => setCaloriesFoodEntry(e.target.value)}
            />
            <Input
            placeholder='Servings'
            value={servingsFoodEntry}
            type='number'
            onChange={(e) => setServingsFoodEntry(e.target.value)}
            />
            <Button type='submit'>Add Food</Button>
        </form>
    </div>
  )
}

export default AddFoodForm