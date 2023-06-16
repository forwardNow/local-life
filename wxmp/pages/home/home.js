// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList();
  },

  getSwiperList() {
    wx.request({
      url: 'http://localhost:3000/home/slides',
      method: 'GET',
      data: {
        id: 1,
      },
      success: (res) => {
        const {
          data: swiperList
        } = res.data;

        this.setData({
          swiperList,
        })
      }
    });
  },
})
