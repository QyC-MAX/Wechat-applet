// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message: "注册page page的生命周期"
  },

  /**
   * 生命周期函数--监听页面加载
   * 初始化页面时触发
   */
  onLoad: function (options) {
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 第一次渲染页面时触发---------------------
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示时触发---------------------
   */
  onShow: function () {
    console.log("onShow")
    wx.request({
      url: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&ch=&tn=baiduerr&bar=&wd=%E5%8F%A4%E5%8A%9B%E5%A8%9C%E6%89%8E',
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏时触发----------------------
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 下拉刷新，要在json文件种开启下拉选项-------------------
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  // 每次滑动都会触发 参数是页面在垂直方向已滚动的距离（单位px）---------------------------
  onPageScroll(options) {
    console.log(options)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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