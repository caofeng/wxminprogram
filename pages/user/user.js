// pages/user/user.js

const date = new Date();
const years = [];
const months =[];
const days = [];

for(let i=1990;i<= date.getFullYear();i++) {
  years.push(i)
}

for(let i=1;i<=12;i++) {
  months.push(i)
}

for(let i=1;i<=31;i++) {
  days.push(i)
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    countryArray: ["中国", "美国", "俄国", "英国", "法国", "德国", "日国", "韩国"],
    mulitarray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物','环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    mulitIndex1:0,
    mulitIndex2: 0,
    mulitIndex3: 0,
    currentTime:"02:34",
    currentDate:"2018-07-12",
    pickerValue:[9999,0,0],
    years:years,
    months:months,
    days:days,
    year:2018,
    month:7,
    day:12,
    radioArray: [{ "name": "中国","id":"1" }, 
      { "name": "美国", "id": "2" }, 
      { "name": "俄国", "id": "3" }, 
      { "name": "英国", "id": "4","checked":"true"}, 
      { "name": "法国", "id": "5"}, 
      { "name": "德国", "id": "6" }]
  
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

  onGotUserInfo:function (event) {
    console.log(event)
  },

  clickchange:function(event) {
    console.log(event)
  },

  itemchange:function(event){
   console.log(event) 
   this.setData({
     index:event.detail.value
   })
  },
  mulitbindchange:function(event){
    console.log(event)
    this.setData({
      mulitIndex1: event.detail.value[0],
      mulitIndex2: event.detail.value[1],
      mulitIndex3: event.detail.value[2]
    })
  },

  timechange:function(event){
    console.log(event)
    this.setData({
      currentTime:event.detail.value
    })
  },

  datechange:function(event) {
    console.log(event)
    this.setData({
      currentDate: event.detail.value
    })
  },

  regionchange:function(event){
    console.log(event)
  },

  selectdatechange:function(event){

    console.log(event)
    this.setData({
      year: this.data.years[event.detail.value[0]],
      month: this.data.months[event.detail.value[1]],
      day: this.data.days[event.detail.value[2]],
    })
  },

  radiochange:function(event){
    console.log(event)
  },

  slidechange:function(event){
    console.log(event)
  },

  clicknextpage:function(event){
    wx.navigateTo({
      url: '../media/media',
    })
  }

})