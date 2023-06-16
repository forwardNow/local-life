// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    slides: [],
    categories: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSlides();
    this.getCategories();
  },

  getSlides() {
    wx.request({
      url: 'http://localhost:3000/home/slides',
      method: 'GET',
      success: (res) => {
        const { data: slides } = res.data;

        this.setData({ slides })
      }
    });
  },

  getCategories() {
    wx.request({
      url: 'http://localhost:3000/home/categories',
      method: 'GET',
      success: (res) => {
        const { data: categories } = res.data;

        this.setData({ categories });
      }
    });
  },
})
