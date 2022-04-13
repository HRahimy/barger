import {ICostItem} from "./cost-item.interface";

export interface ICost {
  id: number;
  name: string;
  displayOrder: number;
  costItems: ICostItem[];
}
