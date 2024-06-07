import { IMovement } from "./IMovement";

export interface IBalanceProps {
  emitMovement(movement: IMovement): void;
  currentBalance: number;
}
