export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  inStock: boolean;
  featured?: boolean;
}