import { foodShopList } from './shop.data';
import { Pager } from '../common/basic/common';

interface Shop {
  name: string;
  cateName: string;
  frontImg: string;
  areaName: string;
  distance: string;
}

enum Categories {
  FOOD = 1,
}

export default class ShopDao {
  getShopList(category: number, pager: Pager): Shop[] {
    const list: Shop[] = getListByCategory(category);

    return getListWithPager(list, pager);
  }

  getShopTotal(category: number) {
    const list: Shop[] = getListByCategory(category);

    return list.length;
  }
}

function getListByCategory(category: Categories) {
  let list: Shop[] = [];

  if (category === Categories.FOOD) {
    list = foodShopList;
  }

  return list;
}

function getListWithPager(list: Shop[], pager: Pager): Shop[] {
  const { pageIndex = 1, pageSize = 10 } = pager;

  const startIndex = pageSize * (pageIndex - 1);
  const stopIndex = pageSize * pageIndex;

  return list.slice(startIndex, stopIndex);
}
