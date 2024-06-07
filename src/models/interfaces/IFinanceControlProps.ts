import { IMovement } from "./IMovement";

export interface IFinanceControlProps {
  handleMovement(movement: IMovement): void;
  currentBalance: number;
  currentExpanses: number;
}
