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

export interface ICostItemSubCost {
  daStage: string;
  persona: string;
  type: 'Quoted' | 'Screened';
  amount: number;
}

export interface ICostItemComments {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: 'Internal' | 'External';
  dateString: string;
}
