import Router from '@koa/router';
import HomeDao from './home.dao';
import JsonResult from '../common/utils/JsonResult';

export default class HomeController {
  private router: Router;
  private dao: HomeDao;

  constructor(router: Router) {
    this.router = router;
    this.dao = new HomeDao();
    this.addRoutes();
  }

  static getInstance(router: Router) {
    return new HomeController(router);
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
