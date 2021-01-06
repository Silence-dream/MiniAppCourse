//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    age: 18,
    married: false,
    id: 11,
    str: "",
    list: [{
      id: "1",
      name: '貂蝉',
      age: 16,
      job: "法师",
      hobbies: "桃花"
    },{
      id: "2",
      name: '甄姬',
      age: 18,
      job: "法师",
      hobbies: "冰球"
    },{
      id: "3",
      name: '小乔',
      age: 30,
      job: "坦克",
      hobbies: "扇子"
    }]
  },
  // 处理tap事件的方法
  handleTap(e){
    console.log(e);
    console.log(1111);
  },

  // 处理input事件的方法
  handleInput(e){
      console.log(e)
      console.log(e.detail.value);
      // this.str = e.detail.value; 错误的 
      this.setData({
        str: e.detail.value
      })
  },

  handleArg(e){
    // console.log(1111)
    console.log(e.target.dataset.index);
  },
  handleRefresh(){
    wx.startPullDownRefresh({
      success: (res) => {
        
      },
    })
  },
  onPageScroll: function (e) {
    console.log(e)
  }, 

  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
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
    // wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    // console.log(res);
    if (res.from == "button") {
      console.log(res);
    }

    return {
      title: "分享的标题",
      path: "https://www.baidu.com",
      imageUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1374891666,2267321865&fm=26&gp=0.jpg"
    }
  }
})