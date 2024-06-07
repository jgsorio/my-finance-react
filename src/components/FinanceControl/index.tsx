import { IFinanceControlProps } from '../../models/interfaces/IFinanceControlProps';
import { IMovement } from '../../models/interfaces/IMovement';
import Balance from '../Balance';
import './style.css';

const FinanceControl = ({ handleMovement, currentBalance, currentExpanses }: IFinanceControlProps) => {
  const receiveNewMovement = (movement: IMovement) => {
    movement && handleMovement(movement);
  }

  return (
    <div className='container_finances'>
      <Balance emitMovement={receiveNewMovement} currentBalance={currentBalance}/>
    </div>
  )
}

export default FinanceControl;
