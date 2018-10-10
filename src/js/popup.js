(function () {
  console.log('popup')
  var app = new Vue({
    el: '#root',
    data: {
      extensions: []
    },
    created: function () {
      var that = this
      chrome.management.getAll(function (list) {
        console.log(list)
        that.extensions = list
      })
    }
  })

  Vue.config.devtools = true
  window.app = app

})()
