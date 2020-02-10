import React from 'react';
import Board from'./component/Board';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
     <main className="flexbox">
       
     <Board id="board-1" className="board">
       <Card id="card-1" className="card" draggable="true">
         <p>Card one</p>
       </Card>
     </Board>

     <Board id="board-2" className="board">
       <Card id="card-2" className="card" draggable="true">
         <p>Card two</p>
       </Card>
     </Board>

     <Board id="board-3" className="board">
       <Card id="card-3" className="card" draggable="true">
         <p>Card three</p>
       </Card>
     </Board>

     </main>
    </div>
  );
}

export default App;
