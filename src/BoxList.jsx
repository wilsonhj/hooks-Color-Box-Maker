import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = (props) => {
  const [boxes, setBoxes] = useState([{ id: uuidv4(), width: 10, height: 40, color: 'orange' }]);
  const bxs = boxes.map(box => (
    <Box key={box.id} width={box.width} height={box.height} color={box.color} />
  ));
  return (
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm />
      {bxs}
    </div>
  )
}

export default BoxList;