// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [],
    catitemsData: [],
    floorData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleSwiperRead();
    this.handleCatitemsRead();
    this.handleFloorRead();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * @name 获取首页轮播图数据
   * 
   */
  handleSwiperRead() {
    const _this = this;
    wx.request({
      url: `https://www.uinav.com/api/public/v1/home/swiperdata`,
      method: 'GET',
      success: function (res) {
        let {
          message,
          meta
        } = res.data;
        if (meta.status == 200) {
          _this.setData({
            swiperData: message
          })
        }
      },
      fail: function (err) {
        console.log("--------- index.js 48 -------------")
        console.log(err)
      }
    })
  },

  /**
   * @name 获取首页分类选项数据
   * 
   */
  handleCatitemsRead() {
    const _this = this;
    wx.request({
      url: `https://www.uinav.com/api/public/v1/home/catitems`,
      method: 'GET',
      success: function (res) {
        let {
          message,
          meta
        } = res.data;
        if (meta.status == 200) {
          _this.setData({
            catitemsData: message
          })
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  /**
   * @name 获取首页楼层
   * 
   */
    handleFloorRead(){
      const _this = this;
      wx.request({
        url: `https://www.uinav.com/api/public/v1/home/floordata`,
        method: 'GET',
        success: function (res) {
          console.log(res);
          let {
            message,
            meta
          } = res.data;
          if (meta.status == 200) {
            _this.setData({
              floorData: message
            })
          }
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
})