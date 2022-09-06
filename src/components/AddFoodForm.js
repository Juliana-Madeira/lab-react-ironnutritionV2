import React, { useState } from 'react';
import { Input, Button, Divider } from 'antd';



const AddFoodForm = (addNewFood) => {
    const [nameFoodEntry, setNameFoodEntry] = useState('');
    const [imageFoodEntry, setImageFoodEntry] = useState('');
    const [caloriesFoodEntry, setCaloriesFoodEntry] = useState('');
    const [servingsFoodEntry, setServingsFoodEntry] = useState('');
   

    const handleSubmit = (e) => {
      console.log('handlesubmit funcionando')
      e.preventDefault();
      const newFoodEntry = {nameFoodEntry, imageFoodEntry, caloriesFoodEntry, servingsFoodEntry}
      addNewFood(newFoodEntry)
      setNameFoodEntry('');
      setImageFoodEntry('');
      setCaloriesFoodEntry(0);
      setServingsFoodEntry(0);
    }

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <form onSubmit={handleSubmit} style={{width: 450}}>
        <Divider>Add Food Entry</Divider>
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
            <Button type='submit'>Add Food</Button>
        </form>
    </div>
  )
}

export default AddFoodForm