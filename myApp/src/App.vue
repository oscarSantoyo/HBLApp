<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    // test for cordova ready
    var app = {
      // Application Constructor
      initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
      },

      // deviceready Event Handler
      //
      // Bind any cordova events here. Common events are:
      // 'pause', 'resume', etc.
      onDeviceReady: function () {
        this.receivedEvent('deviceready')
      },

      // Update DOM on a Received Event
      receivedEvent: function (id) {
        console.log('Received Event: ' + id)
      }
    }
    app.initialize()

    setTimeout(function () { console.log('hello vue.') }, 5000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app > img {
  width: 200px;
  height: 200px;
}
</style>
