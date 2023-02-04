import React from 'react';
import TableComponent from './components/table.component';

function App() {
  return (
    <div className="App">
      <h1>My piggy bank</h1>
     <p>My goal is to start new 2024 year with $ 9 000 - 11 000 in my savings account.  For simplicity, I take $ 715 in the calculation. So final sum is $ 10 000 :)</p>
     <TableComponent />
    </div>
  );
}

export default App;
