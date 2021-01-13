// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的商品数据
    rightContent: [],
    // 被点击的左侧的菜单
    currentIndex: 0,
    // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0
  },
  // 接口的返回数据
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleCateGet();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * @name: 获取分类数据
   * 
   */
  handleCateGet(){
    const _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      method: "GET",
      success: function(res){
        console.log(res);
        let {meta, message} = res.data;

        if (meta.status == 200) {
          _this.Cates = message;
          let leftMenuList = _this.Cates.map(v => v.cat_name);
          // 构造右侧的商品数据
          let rightContent = _this.Cates[0].children;

          _this.setData({
            leftMenuList,
            rightContent
          })
        }
      },
      fail: function(){

      }
    })
  },
  // 获取左侧点击的元素的索引
  handleItemTap(e) {
    /* 
    1 获取被点击的标题身上的索引
    2 给data中的currentIndex赋值就可以了
    3 根据不同的索引来渲染右侧的商品内容
     */
    const { index } = e.currentTarget.dataset;

    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      scrollTop: 0
    })

  }
})