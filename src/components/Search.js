import React from 'react';
import { Input } from 'antd';

const Search = () => {
  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems:"center"}}>
        <label htmlFor="">
            Search
        </label>
        <Input
        type='text'
        style={{marginBottom: '1em', marginTop: '0.5em', border:'1px solid #989898', width: '450px'}}
        />
    </div>
  )
}

export default Search