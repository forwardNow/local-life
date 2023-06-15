import { HOST } from '../common/config/contant';

export interface Slide {
  id: number;
  image: string;
  link: string;
}

export default class HomeDao {
  getSwiperList(): Slide[] {
    return [
      { id: 1, image: HOST + '/image/slides/1.png', link: '' },
      { id: 2, image: HOST + '/image/slides/2.jpg', link: '' },
      { id: 3, image: HOST + '/image/slides/3.gif', link: '' },
    ];
  }
}
