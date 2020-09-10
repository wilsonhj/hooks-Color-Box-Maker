import React, {useState} from 'react';

const NewBoxForm = (props) => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');
  return ( 
    <form>
      <div>
        <label></label>
        <input type="text"/>
      </div>
    </form>
   );
}

export default NewBoxForm;