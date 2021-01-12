// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: [],
    // height: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleCategoryGet();
    // this.setData({
    //   height: (wx.getSystemInfoSync().windowHeight-45)*2
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * @name: 获取分类数据
   *  handle+功能的名字(category)+动词(Get、Del、Edit、Set Add)
   */
  handleCategoryGet: function () {
    // 缓存this
    const _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      method: "GET",
      success(res) {
        console.log(res);
        const {
          meta,
          message
        } = res.data;
        if (meta.status == 200) {
          _this.setData({
            cateList: message
          })
        }
      },
      fail(err) {
        console.log(err);
      }
    })
  }

})