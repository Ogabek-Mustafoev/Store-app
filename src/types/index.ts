export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: { rate: number; count: number };
};

export type TFilterInputs = {
  id: string;
  style: string;
  label: string;
};
