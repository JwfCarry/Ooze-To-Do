<template>
  <div class="box">
    <!-- 左边logo区域 -->
    <div class="logo">
      <img src="../../assets/images/logo2.png" alt="" />
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <Search />
    </div>
  </div>
</template>
<script>
import Search from "./Search.vue";
export default {
  name: "Headers",
  components: {
    Search,
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  height: 85px;
  border-bottom: 1px solid #dbdbdb;
  .logo {
    height: 85px;
    width: 256px;
    border-right: 1px solid #dbdbdb;
    padding-left: 17px;
    padding-top: 22px;
    img {
      width: 150px;
      height: 35px;
    }
  }
  .search {
    position: absolute;
    top: 20px;
    left: 267px;
    margin-left: 35px;
    margin-top: 5px;
  }
}
</style>