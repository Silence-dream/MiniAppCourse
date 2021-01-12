// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: "",
    author: "",
    name: "",
    src: "",
    obj: {
      family: "全栈家族",
      age: 3
    }
  },

  handleViewUser(){
    wx.navigateTo({
      url: "/pages/user/user?name=zs1&age=184",
    })
  },

  handleViewLogs(){
    wx.switchTab({
      url: '/pages/logs/logs',
    })
  },

  handleReadMusic(){
    var _this = this;
    wx.request({
      url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
      method: "GET",
      success: function(res){
        console.log(res);
        _this.setData({
          poster: res.data.data.picurl,
          author: res.data.data.artistsname,
          name: res.data.data.name,
          src: res.data.data.url,
        })
      }
    })
  },

  handleCompo(){
    // console.log(1111);
    // 获取class为compo的组件的实例对象
    // 拿到了实例对象就可以拿到组件的任意数据
    this.selectComponent(".compo").handleaaa()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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