Page({
  // 功能:
  // 0.获取数据
  // 1.渲染左侧菜单
  // 2.渲染右侧菜单
  // 3.点击左侧菜单项，右侧菜单更新
  // 4.右侧菜单更新，滚动条回到顶部
  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单
    cateLeftData: [],
    // 右侧菜单
    cateRightData: [],
    // 选择到的索引
    currentIndex: 0,
    // 滚动条位置
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleCateGet(this.data.currentIndex)
  },

  /**
   * @name: handleCateGet
   * 
   */
  handleCateGet: function (index) {
    const _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      method: "GET",
      success: function (res) {
        // console.log(res);
        let {
          message,
          meta
        } = res.data;
        if (meta.status == 200) {
          _this.setData({
            cateLeftData: message,
            cateRightData: message[index].children
          });

          // wx.setStorage({
          //   data: {
          //     time: new Date().valueOf(),
          //     result: message
          //   },
          //   key: 'key',
          // })
        }
      },
      fail: function (err) {
        console.log('----- cate.js 32------')
        console.log(err);
      }
    })
  },

  /**
   * 点击左侧菜单,更新右侧数据
   */
  handelCateClick: function (e) {
    
    // 获取到一个index
    let index = e.currentTarget.dataset.index;

    this.setData({
      currentIndex: index,
      scrollTop: 0
    })

    this.handleCateGet(index);

    // storge存一条和多条有啥区别
    // localStorage 20M
    // 一条 几乎对浏览器的运行没影响
    // 20M 浏览器运行会很慢
    // 拆分
    // 1.获取key
    // 2.获取设置

  }
})