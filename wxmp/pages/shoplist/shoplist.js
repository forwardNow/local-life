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
    const {
      isLoading,
      pageIndex,
      pageSize,
      total,
    } = this.data;

    if (isLoading) {
      return;
    }

    if (pageIndex * pageSize >= total) { // 没有下一页了
      wx.showToast({
        title: '数据加载完毕',
        icon: 'none'
      });
      return;
    }

    this.setData({ pageIndex: this.data.pageIndex + 1 }); 
    this.getShopList();
  },

  onPullDownRefresh() {
    this.setData({
      pageIndex: 1,
      total: 0,
      shopList: [],
    })

    this.getShopList(() => wx.stopPullDownRefresh());
  },

  getShopList(callback) {
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

        if (typeof callback === 'function') {
          callback();
        }
      },
    });
  }
})