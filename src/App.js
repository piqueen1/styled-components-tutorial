import React from 'react';
import './App.css';

function App() {
  return (
   <div>
     <h1>Styled components</h1>
     <h2 style={{ color:'red', textTransform: 'up'}}>Inline styles</h2>
     <h2 className='global'>Global CSS</h2>
     <h2 className='first'>First</h2>
     <h2 className='second'>Second</h2>

   </div>
  );
}

export default App;
