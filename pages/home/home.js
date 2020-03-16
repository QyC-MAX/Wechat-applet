// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: ['古力娜扎','杨幂','miss']
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

  },
  // 1
  handleClick() {
    console.log('....')
  },

// 2
  handleTouchstart() {
    console.log('handleTouchstart');
  },
  handleTap() {
    console.log('handleTap');
  },
  handleTouchend() {
    console.log('handleTouchend');
  },
  handleTouchmove() {
    console.log('handleTouchmove');
  },
  handlelongpress() {
    console.log('handlelongpress');
  },

// 3
  bindOuter() {
    console.log("handleOuter")
  },
  bindInner() {
    console.log('handleInner')
  },
  catchOuter() {
    console.log("catchOuter")
  },
  catchInner() {
    console.log("catchInner")
  },
  
  // 4
  handleBtn(event) {
    console.log(event)
  },
  currentTarget(event) {
    console.log(event)    
  },
  target(event) {
    console.log(event)
  },

  // 5
  handleItem(event) {
    console.log(event)
    const satrName = event.currentTarget.dataset.item;
    const satrIndex = event.currentTarget.dataset.index;
    console.log(satrIndex)
    console.log(satrName)

  }

})