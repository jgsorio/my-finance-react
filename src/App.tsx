import './App.css';
import FinanceControl from './components/FinanceControl';
import Header from './components/Header';
import { IMovement } from './models/interfaces/IMovement';
import { useState } from 'react';

function App() {
  const [currentbalance, setCurrentBalance] = useState(0);
  const [currentExpanses, setCurrentExpanses] = useState(0);
  const [movements, setMovements] = useState<IMovement[]>([]);

  const handleMovement = (movement: IMovement) => {
    if (movement) {
      movement.type === "income"
        ? setCurrentBalance(currentbalance + Number(movement.value))
        : setCurrentExpanses(currentExpanses + Number(movement.value));

      movement.type === "outcome" && setCurrentBalance(currentbalance - Number(movement.value));
      setMovements([movement, ...movements]);
    }
  }

  return (
    <div>
      <Header />
      <FinanceControl handleMovement={handleMovement} currentBalance={currentbalance} currentExpanses={currentExpanses}/>
    </div>
  )
}

export default App
