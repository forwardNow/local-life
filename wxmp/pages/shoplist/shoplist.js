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

    isLoading: false,
  },
  onLoad(options) { 
    this.setData({ query: options });
    this.getShopList();
  },

  onReady() { 
    const { title } = this.data.query;
    wx.setNavigationBarTitle({ title });
  },

  onReachBottom() {
    if (this.data.isLoading) {
      return;
    }

    if (this.data.total === this.data.shopList.length) {
      return;
    }

    this.setData({ pageIndex: this.data.pageIndex + 1 }); 
    this.getShopList();
  },

  getShopList() {
    wx.showLoading({
      title: '数据加载....',
    });
    this.setData({ isLoading: true })

    const { 
      query: {
        id: category,
      },
      pageIndex,
      pageSize,
    } = this.data;

    wx.request({
      url: HOST + '/shop/list',
      method: 'POST',
      data: {
        category, 
        pageIndex, 
        pageSize,
      },
      success: (res) => {
        const { data: { list, pager: { total } } } = res.data;

        this.setData({ 
          shopList: [
            ...this.data.shopList,
            ...list,
          ], 
          total, 
        })
      },

      complete: () => {
        wx.hideLoading();
        this.setData({ isLoading: false })
      },
    });
  }
})