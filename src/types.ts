export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  category: string;
  seller: string;
  location: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  quantity?: number;
  customization?: string;
}