import { HOST } from '../common/config/contant';

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
    return [
      { id: 1, image: HOST + '/images/slides/1.png', link: '' },
      { id: 2, image: HOST + '/images/slides/2.jpg', link: '' },
      { id: 3, image: HOST + '/images/slides/3.gif', link: '' },
    ];
  }

  getCategories(): Category[] {
    return [
      { id: 1, name: '美食', icon: HOST + '/images/categories/icon_01.png' },
      { id: 2, name: '洗浴足疗', icon: HOST + '/images/categories/icon_02.png' },
      { id: 3, name: '结婚啦', icon: HOST + '/images/categories/icon_03.png' },
      { id: 4, name: '卡拉OK', icon: HOST + '/images/categories/icon_04.png' },
      { id: 5, name: '找工作', icon: HOST + '/images/categories/icon_05.png' },
      { id: 6, name: '辅导班', icon: HOST + '/images/categories/icon_06.png' },
      { id: 7, name: '汽车保养', icon: HOST + '/images/categories/icon_07.png' },
      { id: 8, name: '租房', icon: HOST + '/images/categories/icon_08.png' },
      { id: 9, name: '装修', icon: HOST + '/images/categories/icon_09.png' },
    ]
  }
}
