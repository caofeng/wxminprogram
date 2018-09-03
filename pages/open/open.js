// pages/open/open.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesrc:"../res/dilireba.jpg"
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

  buttonclick:function(event){
    console.log("开放能力")
    // 选择图片
    // wx.chooseImage({
    //   count:1,
    //   success: function(res) {
    //     console.log(res.tempFilePaths[0])
    //     this.setData({
    //       src: res.tempFilePaths[0]
    //     })
    //   },
    //   complete:function(com){
    //     console.log(com)
    //   }
    // })


    //获取图片信息
    // wx.getImageInfo({
    //   src: '../res/dilireba.jpg',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })



      // wx.chooseImage({
      //   count:1,
      //   success: function(res) {
      //     wx.getImageInfo({
      //       src: res.tempFilePaths[0],
      //       success:function(suc){
      //         console.log(suc.path)
      //       }
      //     })
      //   },
      // })


      // wx.saveImageToPhotosAlbum({
      //   filePath: '../res/dilireba.jpg',
      //   success:function(res){
      //     console.log(res)
      //   },
      //   fail:function(res){
      //     console.log(res)
      //   }
      // })

      // wx.getSystemInfo({
      //   success: function(res) {
      //     console.log(res)
      //   },
      // })

      // wx.getNetworkType({
      //   success: function(res) {
      //     console.log(res)
      //   },
      // })

      // wx.onNetworkStatusChange(function (res) {

      // })

      // wx.setScreenBrightness({
      //   value: 0.3,
      //   success:function(res){
      //     console.log("设置屏幕亮度"+res);
      //   }
      // })

      // wx.vibrateLong({
      //   success:function(res){
      //     console.log("手机震动")
      //   }
      // })

      //打电话
      // wx.makePhoneCall({
      //   phoneNumber: '18320836205',
      // })

      //扫码
      // wx.scanCode({
      //   success:function(res){
      //     console.log("扫码结果:"+res.result)
      //   }
      // })


      // wx.addPhoneContact({
      //   firstName: '',
      // })


      // wx.getHCEState({
      //   success:function(res){
      //     console.log("判断是否支持NFC:"+res.errCode)
      //   },
      //   fail:function(res){
      //     console.log("API调用出错:" + res)
      //   }
      // })

      // wx.showLoading({
      //   title: '加载中...',
      // })

        // wx.showToast({
        //   title: '成功',
        //   icon:"success",
        //   duration:2000,

        // })


        // wx.showModal({
        //   title: '提示',
        //   content: '这是一个弹框',
        //   success:function(res){
        //     if(res.confirm){
        //       console.log("点击了确定");
        //     } else if(res.cancel){
        //       console.log("点击了取消");
        //     }
        //   }
        // })


        // wx.showActionSheet({
        //   itemList: ["action1","action2","action3"],
        //   success:function(res){
        //     console.log(res.tapIndex)
        //   }
        // })

        // wx.setTopBarText({
        //   text: 'hello world!',
        //   success:function(res){
        //     console.log(res)
        //   }
        // })

        // wx.setNavigationBarTitle({
        //   title: '我的标题',
        // })


        // wx.setNavigationBarColor({
        //   frontColor: '#ffffff',
        //   backgroundColor: '#ff00ff',
        //   animation:{
        //     duration:5000,
        //     timingFunc: 'easeOut'
        //   }
        // })


        // wx.showNavigationBarLoading();

        // setTimeout(function(){
        //   wx.hideNavigationBarLoading()
        // },2000)








  },
  
})