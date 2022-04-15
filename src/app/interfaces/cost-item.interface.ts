export interface ICostItem {
  id: number;
  name: string;
  costItemAlias: ICostItemAlias;
  annotation: ICostItemAnnotation;
  costs: ICostItemSubCost[];
  comments: ICostItemComments[];
}

export interface ICostItemAlias {
  accountingCode: string;
}

export interface ICostItemAnnotation {
  id: number;
  name: string;
}

export enum CostItemSubCostType {
  Quoted = 'Quoted',
  Screened = 'Screened'
}

export interface ICostItemSubCost {
  daStage: string;
  persona: string;
  type: CostItemSubCostType;
  amount: number;
}

export enum CostItemCommentType {
  Internal = 'Internal',
  External = 'External'
}

export interface ICostItemComments {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: CostItemCommentType;
  dateString: string;
}
