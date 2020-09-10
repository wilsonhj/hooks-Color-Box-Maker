import React from 'react';
import useInputState from './hooks/useInputState';

const NewBoxForm = (props) => {
  const [value, handleChange, reset] = useInputState('');
  // const [width, setWidth] = useState('');
  // const [color, setColor] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.createBox(props.boxes);
  };
  return ( 
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor='height'>Height</label>
        <input type="text" name='height' value={value[0]} id='height' onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='width'>Width</label>
        <input type="text" name='width' value={value[0]} id='width' onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='color'>Color</label>
        <input type="text" name='color' value={value[0]} id='color' onChange={handleChange}/>
      </div>
      <button type="submit">Add New Box</button>
    </form>
  );
}

export default NewBoxForm;