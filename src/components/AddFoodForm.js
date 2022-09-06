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
    <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <h1>Add Food Entry</h1>
        <form onSubmit={handleSubmit} style={{width: 450}}>
            <Input
            placeholder='Name of Food'
            value={nameFoodEntry}
            type='text'
            onChange={(e) => setNameFoodEntry(e.target.value)}
            style={{marginBottom: '1em', border:'1px solid #989898'}}
            />
            <Input
            placeholder='Image Url'
            value={imageFoodEntry}
            type='text'
            onChange={(e) => setImageFoodEntry(e.target.value)}
            style={{marginBottom: '1em', border:'1px solid #989898'}}
            />
            <Input
            placeholder='Calories'
            value={caloriesFoodEntry}
            type='number'
            onChange={(e) => setCaloriesFoodEntry(e.target.value)}
            style={{marginBottom: '1em', border:'1px solid #989898'}}
            />
            <Input
            placeholder='Servings'
            value={servingsFoodEntry}
            type='number'
            onChange={(e) => setServingsFoodEntry(e.target.value)}
            style={{marginBottom: '1em', border:'1px solid #989898'}}
            />
            <Button type='primary'>Add Food</Button>
        </form>
    </div>
  )
}

export default AddFoodForm