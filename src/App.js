import './App.css';

import Board from './Board';
function App() {
  
  const Buttons=[]
  for(let i=0;i<64;i++)
    Buttons.push(i)
  console.log("Start")
  return (
    <div className="App">
        <Board/>
    </div>
  );
}

export default App;
