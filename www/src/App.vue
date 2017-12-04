<template>
  <body>
    <div class="container-fluid main">
    
  <div id="app">
    <a><h3 @click="logout" class="logout">Log Out</h3></a>
    <div class="row"></div>
    <router-view></router-view>
  </div>
</div>
</body>

</template>

<script>
  import Error from './components/Error'
  export default {
    name: 'app',
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    },
    components: {
      Error
    },
    mounted() {
      this.$store.dispatch('authenticate')
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

  .logout {
    list-style-type: none;
    margin-right: 10px;
    padding: 3px;
    overflow: hidden;
    float: right;
    cursor: pointer;
    color: rgb(134, 18, 18);
    outline: 1px solid black;
}

.logout:hover{
  background-color: rgba(172, 0, 0, 0.87);
  color: rgb(255, 255, 255);
  transition: .3s
}
.main{
  height: 100%;
  width: 100%;
  background-color: rgba(32, 62, 117, 0.308)
}

</style>