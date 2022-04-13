import {ICurrency} from "./currency.interface";
import {ICost} from "./cost.interface";

export interface ICostsResponse {
  daCurrency: ICurrency;
  baseCurrency: ICurrency;
  costs: ICost[];
}
