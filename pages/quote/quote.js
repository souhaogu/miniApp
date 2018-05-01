// pages/quote/quote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //事件处理函数:导航到“自选”页面
  naviToSelfSelect: function () {
    wx.navigateTo({
      url: '../selfselect/selfselect'
    })
  },

  //事件处理函数:导航到“行情”页面
  naviToQuote: function () {
    wx.navigateTo({
      url: '../quote/quote'
    })
  },

  //事件处理函数:导航到“设置”页面
  naviToSettings: function () {
    wx.navigateTo({
      url: '../settings/settings'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})