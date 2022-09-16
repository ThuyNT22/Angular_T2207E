export interface IType {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface IFoodType {
  message: string;
  data: IType[];
}
