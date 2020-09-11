import React from 'react';

const Box = (props) => {
  return (
    <div>
      <div style={{
        height: `${props.height}em`,
        width: `${props.width}em`,
        backgroundColor: props.color
        }}>
      </div>
      <button onClick={props.removeBox}>Remove Box</button>
    </div>
  )
}

export default Box;