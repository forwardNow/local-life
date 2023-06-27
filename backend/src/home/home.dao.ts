import { categories, slides } from './home.data';

export interface Slide {
  id: number;
  image: string;
  link: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export default class HomeDao {
  getSlides(): Slide[] {
    return slides;
  }

  getCategories(): Category[] {
    return categories;
  }
}
