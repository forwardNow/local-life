import Router from '@koa/router';
import ShopDao from './shop.dao';
import JsonResult from '../common/utils/JsonResult';

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
    this.getSlides();
    this.getCategories();
  }

  getSlides() {
    this.router.get('/home/slides', (ctx) => {
      const slides = this.dao.getSlides();
      ctx.response.body = JsonResult.SUCCESS(slides);
    });
  }

  getCategories() {
    this.router.get('/home/categories', (ctx) => {
      const categories = this.dao.getCategories();
      ctx.response.body = JsonResult.SUCCESS(categories);
    });
  }
}
