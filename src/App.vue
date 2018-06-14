<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-menu :default-active="activeIndex" class="el-menu"  mode="horizontal" @select="handleSelect" background-color="black" active-text-color="white">
          <img src="../src/assets/NAB.png" class="image" width="130" height="75" align="left">
          <el-menu-item index="1">
            <p>
              <router-link to="/">Home</router-link>
            </p>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
            <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1',
      activeIndex2: '1',
      activeIndex3: '2',
      activeIndex4: '3'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
 text-decoration: none;
 font-size: 200%;
}
img{
    display: block;
    margin: 0 auto;
    text-align: center;
}

main{
  margin-top: 25px;
  background-color: white;
  text-align: center;
}

#steps{
  text-align: left;
}



</style>

