Page({
  data: {
    array: []
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

  //事件处理函数:导航到“股票明细”页面
  viewStockDetail: function () {
    wx.navigateTo({
      url: '../stockdetail/stockdetail'
    })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // this.getData()
  },

  onReady: function () {
    // 页面渲染完成
  },

  onShow: function () {
    // 页面显示
  },

  onHide: function () {
    // 页面隐藏
  },

  onUnload: function () {
    // 页面关闭
  }
})