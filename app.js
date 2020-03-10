// 注册app

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("初始化: onLaunch")


    // 获取用户信息 即将废弃的api  第二个获取用户信息的方法在 home-------------------------------------------------
    // wx.getUserInfo({
    //   success:function(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow-----
   * 及就是界面显示时触发
   */
  onShow: function (options) {
    console.log("初始化: onShow")
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 界面关闭时
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
