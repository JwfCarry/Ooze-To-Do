<template>
  <div class="btn">
    <div class="icon">
      <search-outlined :style="{ fontSize: '24px', color: '#8a8696' }" />
    </div>
    <input class="search" type="text" placeholder="请输入内容" />
  </div>
</template>

<script>
import { SearchOutlined } from "@ant-design/icons-vue";
export default {
  name: "Search",
  components: {
    SearchOutlined,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.btn {
  position: relative;
  width: 330px;
  height: 38px;
  background-color: #f5f5f5;
  border-radius: 6px;
  .icon {
    position: absolute;
    top: 8px;
    left: 17px;
    cursor: pointer;
  }
  .search {
    position: absolute;
    left: 51px;
    top: 0px;
    width: 280px;
    height: 100%;
    border-radius: 6px;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
    outline: none;
  }
}
</style>