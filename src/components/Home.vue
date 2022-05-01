<template>
  <!-- 头部 -->
  <headers></headers>
  <!-- 导航栏 -->
  <div class="navMenu">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="vertical"
      @click="handleClick"
    >
      <a-menu-item key="1">
        <template #icon>
          <appstore-outlined />
        </template>
        首页
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <carry-out-outlined />
        </template>
        我的一天
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <message-outlined />
        </template>
        任务清单
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <CalendarOutlined />
        </template>
        倒数日
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <highlight-outlined />
        </template>
        备忘录
      </a-menu-item>
      <a-menu-item key="6">
        <template #icon>
          <setting-outlined />
        </template>
        设置
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import {
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  CarryOutOutlined,
  MessageOutlined,
  HighlightOutlined,
} from "@ant-design/icons-vue";
import Headers from "./Header/Headers.vue";
export default {
  name: "Home",
  components: {
    Headers,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    CarryOutOutlined,
    MessageOutlined,
    HighlightOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: [], //导航栏：当前选中的菜单项 key 数组
    });
    //点击 MenuItem 调用此函数
    const handleClick = (menuInfo) => {
      console.log("click ", menuInfo);
    };

    return { ...toRefs(state), handleClick };
  },
};
</script>

<style lang="less" scoped>
</style>