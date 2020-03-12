// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: ''
  },
  
  handleChooseAlbum() {
    // console.log("----------------");
    const _this = this;
    wx.chooseImage({
      success: function(res) {

        // 第一步 取得选中图片的路径
        const path = res.tempFilePaths[0]

        // 第二步 把 path 赋给imgPath
        _this.setData({
          imgPath: path
        })
      },
    })
  },
  handleImageLoad() {
    console.log("图片加载完成")
  }
})