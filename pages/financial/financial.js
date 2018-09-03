

var common = require('../common/common.js')
// pages/financial/financial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"曹峰",
    array:[1,2,3,4,5,6,7],
    scrollTop:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面加载完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("显示理财页面");
    common.log(Math.max(1,2,3,4,5,10,12,8));
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("隐藏理财页面");
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
  
    wx.stopPullDownRefresh();

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

    return{
      title:"自定义转发标题",
      path:"pages/financial/financial"
    }
  },
  onPageScroll: function () {
    console.log("页面滚动")
  },
  onTabItemTap: function () {
    console.log("点击tab")
  },
  customMethod:function(param){
    common.log(param)
    common.log(param.currentTarget.dataset.senderBeta)
    
    this.setData({
      name: "黄仲闲"
    })

    common.sayhello(this.data.name)
  },

  toupper :function(event) {
    common.log(event)
  },


  scroll:function(event) {
    common.log(event);
    
  },

  addToScroll:function(event) {
    this.setData({
      scrollTop: this.data.scrollTop+10
    })
  },

  bindchange:function(event) {
    common.log(event);
  }

})