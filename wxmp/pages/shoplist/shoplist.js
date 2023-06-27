// pages/shoplist/shoplist.js
import HOST from '../../config/host';

Page({
  data: {
    query: {
      // id: Number,
      // title: String,
    },
    shopList: [], 
    pageIndex: 1,
    pageSize: 10,
    total: 0,
  },
  onLoad(options) { 
    this.setData({ query: options });

    const { 
      query: {
        id: category,
      },
      pageIndex,
      pageSize,
    } = this.data;

    this.getShopList(category, pageIndex, pageSize);
  },

  onReady() { 
    const { title } = this.data.query;
    wx.setNavigationBarTitle({ title });
  },

  getShopList(category, pageIndex, pageSize) {
    wx.request({
      url: HOST + '/shop/list',
      method: 'POST',
      data: {
        category, 
        pageIndex, 
        pageSize,
      },
      success: (res) => {
        const { data: { list, total } } = res.data;

        this.setData({ shopList: list, total, })
      }
    });
  }
})