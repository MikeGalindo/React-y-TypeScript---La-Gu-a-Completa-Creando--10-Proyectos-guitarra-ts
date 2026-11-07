export interface IGuitar {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export type ICarritoItem = Omit<IGuitar, 'description'> & {
  cantidad: number;
}
