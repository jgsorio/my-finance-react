export interface IMovement {
  name: string;
  value: string;
  type: "income" | "outcome";
  id?: string;
}
