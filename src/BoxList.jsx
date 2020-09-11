import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = (props) => {
  const [boxes, setBoxes] = useState([]);
  const createBox = (newBox) => {
    setBoxes( [...boxes, newBox] );
  };
  const removeBox = id => {
    setBoxes( boxes.filter(box => box.id !== id) );
  };
  const updatedBoxes = boxes.map(box => (
    <Box 
      key={box.id} 
      id={box.id}
      width={box.width} 
      height={box.height} 
      color={box.color}
      removeBox={() => removeBox(box.id)}
    />
  ));

  return (
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm createBox={createBox} boxes={boxes}/>
      {updatedBoxes}
    </div>
  );
};

export default BoxList;