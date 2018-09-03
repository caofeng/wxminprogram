// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

    var context = wx.createCanvasContext("firstcanvas")
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(2)
    context.rect(10,10,100,100)
    context.stroke()

    context.moveTo(270, 250)
    context.setStrokeStyle("#0000ff")
    context.setLineWidth(3)
    // context.moveTo(170,250)
    context.arc(170,250,100,0,2*Math.PI,true)
    context.stroke()
    context.draw()




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
  touchbegin:function(event){
    console.log(event)

  },
  touchmove:function(event){
    console.log(event.touches[0].x)
  },
  touchend:function(event){
    console.log(event)
  }




})