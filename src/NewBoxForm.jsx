import React from 'react';
import useInputState from './hooks/useInputState';

const NewBoxForm = (props) => {
  const [value, handleChange, reset] = useInputState({ height: '', width: '', color: '' });
  // const [width, setWidth] = useState('');
  // const [color, setColor] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.createBox(value); // todo : pass state object: {width: 100, height: 50, color: 'pink' } // how?
    reset();
  };
  return ( 
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor='height'>Height</label>
        <input type="text" name='height' value={value.height} id='height' onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='width'>Width</label>
        <input type="text" name='width' value={value.width} id='width' onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='color'>Color</label>
        <input type="text" name='color' value={value.color} id='color' onChange={handleChange}/>
      </div>
      <button type="submit">Add New Box</button>
    </form>
  );
}

export default NewBoxForm;