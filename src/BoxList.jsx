import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = (props) => {
  const [boxes, setBoxes] = useState( [{ id: uuidv4(), width: 10, height: 10, color: 'orange' }] );
  const createBox = (newBox) => {
    setBoxes( [...boxes, newBox] );
  };
  const updatedBoxes = boxes.map(box => ( // todo: boxes.map is not a function?
    <Box key={box.id} width={box.width} height={box.height} color={box.color} />
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