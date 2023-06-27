// pages/shoplist/shoplist.js
Page({
  data: {
    query: {},
  },
  onLoad(options) { 
    this.setData({ query: options });
  },

  onReady() { 
    const { title } = this.data.query;
    wx.setNavigationBarTitle({ title });
  },
})