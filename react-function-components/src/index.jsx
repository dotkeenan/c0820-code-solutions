import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return (
    <button>ClickMe!</button>
  );
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
