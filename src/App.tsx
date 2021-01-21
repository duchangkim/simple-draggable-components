import React from 'react';
import Draggable from './components/Draggable';
import BoxContainer from './components/BoxContainer';

function App() {
  return (
    <Draggable>
      <BoxContainer />
    </Draggable>
  );
}

export default App;
