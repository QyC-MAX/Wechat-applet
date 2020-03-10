// pages/home/home.js
Page({
  data: {
    name: '断那叁仟痴念',
    stars: [
      { name: '楼德华', age: 666 },
      { name: '渣渣辉', age: 777 },
    ],
    counter: 0
  },
  incBtnClick() {
    // 错误的方法 不会在界面上显示改变后的数字
    // this.data.counter += 1,
    //   console.log(this.data.counter)


    // 要动态点击修改data 里的值 要在 this.setData({}) 里修改
    this.setData({
      counter: this.data.counter + 1
    })
  },
  redBtnClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },


  // ---------------------------------------
  handleGetUserInfo(options) {
    console.log(options)
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