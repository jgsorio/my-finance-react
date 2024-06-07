import { IButtonProps } from '../../models/interfaces/IButtonProps';
import './style.css';

const Button = ({ title, priority, action, type, disabled }: IButtonProps) => {
  return (
    <button 
      disabled={disabled || false}
      onClick={action}
      type={type || 'button'}
      className={`btn ${priority === "input" ? "greenBg" : "redBg"}`}>
        {title}
    </button>
  )
}

export default Button;
