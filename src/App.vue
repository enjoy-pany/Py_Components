<template>
  <div id="app">
    <h1 class="title">{{message}}</h1>
    <ul class="navList">
      <li>
        <router-link to="/pagination">分页器</router-link>
      </li>
      <li>
        <router-link to="/select_search">搜索下拉框</router-link>
      </li>
      <li>
        <router-link to="/alert">Alert弹框</router-link>
      </li>
      <li>
        <router-link to="/swiper">轮播</router-link>
      </li>
      <li>
        <router-link to="/drag">拖拽</router-link>
      </li>
      <li>
        <router-link to="/contentmenu">自定义右键菜单</router-link>
      </li>
      <li>
        <router-link to="/scroll_top">吸顶菜单栏</router-link>
      </li>
      <li>
        <router-link to="/anchor">锚点定位</router-link>
      </li>
      <li>
        <router-link to="/test">测试</router-link>
      </li>
    </ul>
    <div class="viewShow">
      <router-view/>
    </div>
    <div class="readMeShow">
      This Is Component Introduction
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Welcome to Py_components, Please click the link to view!'
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .navList {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    font-size: 16px;
    border: 2px #d1d1d1 solid;
    border-bottom: none;
    box-sizing: border-box;
    li {
      line-height: 32px;
      list-style: none;
      padding: 0 10px;
      border-right: 2px #d1d1d1 solid;
      a {
        color: #333;
      }
    }
    .router-link-active {
      color: #fcc800!important;
    }
  }
  .viewShow {
    width: 100%;
    min-height: 350px;
    border: 2px #d1d1d1 solid;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
  }
  .readMeShow {
    width: 100%;
    height: 100%;
    border: 2px #d1d1d1 dashed;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
