import Router from '@koa/router';
import HomeDao from './home.dao';
import JsonResult from '../common/JsonResult';

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
  }

  getSlides() {
    this.router.get('/home/slides', (ctx) => {
      const swiperList = this.dao.getSwiperList();
      ctx.response.body = JsonResult.SUCCESS(swiperList);
    });
  }
}
