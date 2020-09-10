import React from 'react';
import useInputState from './hooks/useInputState';

const NewBoxForm = (props) => {
  const [value, handleChange] = useInputState('');
  // const [width, setWidth] = useState('');
  // const [color, setColor] = useState('');
  return ( 
    <form>
      <div>
        <label htmlFor='height' ></label>
        <input type="text" name='height' value={value} id='height' onChange={handleChange}/>
      </div>
    </form>
  );
}

export default NewBoxForm;