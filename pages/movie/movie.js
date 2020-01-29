// pages/movie/movie.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoPlay: null,
    dataList: [],
    fullScreen:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    wx.hideShareMenu();
  },

  videoPlay: function (e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
        _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index + "")
    videoContextPrev.stop();

    setTimeout(function () {
        //将点击视频进行播放
        var videoContext = wx.createVideoContext(_index + "")
        videoContext.play();
    }, 500)
  },

  play(e) {
    //执行全屏方法  
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.requestFullScreen();
    this.setData({
      fullScreen: true
    })
    
  },
  /**关闭视屏 */
  closeVideo() {
    //执行退出全屏方法
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.exitFullScreen();
    this.setData({
      fullScreen: false
    })
  },
  /**视屏进入、退出全屏 */
  fullScreen(e) {
    var isFull = e.detail.fullScreen;
    //视屏全屏时显示加载video，非全屏时，不显示加载video
    this.setData({
      fullScreen: isFull
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  getData: function () {
    this.setData({
        dataList: [
            { "id": 6193654, "title": "1.有效刷牙", "content": "https://f.video.weibocdn.com/004wyr3Olx07AtF0XfZu01041200GAb40E010.mp4?label=mp4_hd&template=640x480.25.0&trans_finger=1d826f6f1a11607b0eef762fee9b15cd&Expires=1580093619&ssig=4n3IBEnIyI&KID=unistore,video", "cover": "https://wx4.sinaimg.cn/mw690/007RARhYly1gbawhhqqd3j313y0m6nhg.jpg" },
            { "id": 6193729, "title": "2.牙线的使用", "content": "https://f.video.weibocdn.com/003qdKp0lx07AtF3wmE801041200lX2A0E010.mp4?label=mp4_hd&template=640x480.25.0&trans_finger=1d826f6f1a11607b0eef762fee9b15cd&Expires=1580093781&ssig=grfopcIHkZ&KID=unistore,video", "cover": "https://wx1.sinaimg.cn/mw690/007RARhYly1gbawhhpjnaj313w0max0k.jpg" },
            { "id": 6193504, "title": "3.牙间刷的使用", "content": "https://f.video.weibocdn.com/001gMOHUlx07AtGmBrcA01041200c2Z80E010.mp4?label=mp4_hd&template=640x480.25.0&trans_finger=1d826f6f1a11607b0eef762fee9b15cd&Expires=1580094131&ssig=prKk0Od1Xr&KID=unistore,video","cover": "https://wx3.sinaimg.cn/mw690/007RARhYly1gbawhhri5cj313t0m7dzo.jpg" }
        ]
    });

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