//index.js
//获取应用实例
const app = getApp()

var timer; // 计时器

//事件处理函数
var bindViewTap2 = function() {
  wx.navigateTo({
    //url: '../logs/logs'
    url: '../selfselect/selfselect'
  })
}

Page({
  data: {
    motto: '点击进入',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      //url: '../logs/logs'
      url: '../selfselect/selfselect'
    })
  },
  onLoad: function () {    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

      timer = setTimeout(function () {
        console.log("----time out trigger----");
        bindViewTap2();
      }, 1000);      
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        timer = setTimeout(function () {
          console.log("----time out trigger----");
          bindViewTap2();
        }, 1000);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
