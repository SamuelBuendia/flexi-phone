type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  highlights: Array<string>;
  breadcrumbs: Array<Breadcrumb>;
  colors: Array<Color>;
  sizes: Array<Size>;
};