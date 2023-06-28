import Router from '@koa/router/index';
import ShopDao from './shop.dao';
import JsonResult from '../common/utils/JsonResult';
import { Pager } from '../common/basic/common';

export default class ShopController {
  private router: Router;
  private dao: ShopDao;

  constructor(router: Router) {
    this.router = router;
    this.dao = new ShopDao();
    this.addRoutes();
  }

  static getInstance(router: Router) {
    return new ShopController(router);
  }

  private addRoutes() {
    this.getShopList();
  }

  getShopList() {
    this.router.post('/shop/list', (ctx) => {
      const { category, pageIndex, pageSize } = ctx.request.body as ShopListRequestBody;

      const fmtCategory = Number(category);

      const list = this.dao.getShopList(fmtCategory, { pageIndex, pageSize });

      const pager: Pager = {
        total: this.dao.getShopTotal(fmtCategory),
        pageIndex,
        pageSize,
      }

      ctx.response.body = JsonResult.SUCCESS({ list, pager });
    });
  }
}

interface ShopListRequestBody {
  category: number,
  pageIndex: number,
  pageSize: number
}
