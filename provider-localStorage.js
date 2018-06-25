//localstorage provider
//立即执行函数
(function() {
  var model = window.model;
  var storage = window.localStorage;
  //拷贝
  Object.assign(model, {
    //从localstorage中获取model的值
    init: function(callback) {
      var data = storage.getItem(model.TOKEN);
      try {
        if (data) model.data = JSON.parse(data);
      }
      catch (e) {
        storage.setItem(model.TOKEN, '');
        console.log(e);
      }
      //若有回调函数吗，则执行回调函数
      if (callback) callback();
    },
    //将model和localstorage存的数据同步
    flush: function(callback) {
      try {
        storage.setItem(model.TOKEN, JSON.stringify(model.data));
      }
      catch (e) {
        console.log(e);
      }
      if (callback) callback();
    }
  });
})();