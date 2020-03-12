Page({
  // mixins: [require('../../mixin/themeChanged')],
  data: {
    inputShowed: false,
    inputVal: "",
    switchColor: "切换颜色",
    isActive: false,
    nowTime: new Date().toLocaleString()
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  // mustache
  handleSwitchColor() {
    // console.log(this.data.nowTime);
    this.setData({
      isActive : !this.data.isActive
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  }
});