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
      <button>todo</button>
    </div>
  )
}

export default Box;