import { foodShopList, ktvShopList } from './shop.data';
import { Pager } from '../common/basic/common';

interface Shop {
  name: string;
  cateName: string;
  frontImg: string;
  areaName: string;
  distance: string;
}

enum Categories {
 FOOD = 1, // 美食
 BATHING_FOOT_THERAPY = 2, // 洗浴足疗
 marriage = 3, // 结婚啦
 KTV = 4, // 卡拉OK
 JOB = 5, // 找工作
 TUTORING = 6, // 辅导班
 CAR_MAINTENANCE = 7, // 汽车保养
 HOUSE_RENTING = 8, // 租房
 RENOVATION = 9, // 装修
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

  if (category === Categories.KTV) {
    list = ktvShopList;
  }

  return list;
}

function getListWithPager(list: Shop[], pager: Pager): Shop[] {
  const { pageIndex = 1, pageSize = 10 } = pager;

  const startIndex = pageSize * (pageIndex - 1);
  const stopIndex = pageSize * pageIndex;

  return list.slice(startIndex, stopIndex);
}
