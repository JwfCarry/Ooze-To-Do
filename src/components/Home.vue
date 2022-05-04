<template>
  <!-- 头部 -->
  <headers></headers>
  <!-- 导航栏 -->
  <div class="navMenu">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="vertical"
      @click="handleClick(item)"
      class="nav"
      v-for="item in asideMenu"
      :key="item.path"
    >
      <a-menu-item :key="item.key">
        <template #icon>
          <component :is="$antIcons[item.icon]" />
        </template>
        {{ item.title }}
      </a-menu-item>
    </a-menu>
  </div>
  <!-- 内容区 -->
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import Headers from "./Header/Headers.vue";
export default {
  name: "Home",
  components: {
    Headers,
  },
  setup() {
    //导航栏：当前选中的菜单项 key 数组
    const state = reactive({
      selectedKeys: [],
    });
    //使用路由api
    const router = useRouter();
    const route = useRoute();
    //存储导航侧边栏信息
    const asideMenu = reactive([
      {
        title: "首页",
        path: "/main",
        name: "Main",
        key: 1,
        icon: "AppstoreOutlined",
      },
      {
        title: "我的一天",
        path: "/day",
        name: "Day",
        key: 2,
        icon: "CarryOutOutlined",
      },
      {
        title: "任务清单",
        path: "/task",
        name: "Task",
        key: 3,
        icon: "MessageOutlined",
      },
      {
        title: "倒数日",
        path: "/date",
        name: "Date",
        key: 4,
        icon: "CalendarOutlined",
      },
      {
        title: "备忘录",
        path: "/memorandum",
        name: "Memorandum",
        key: 5,
        icon: "HighlightOutlined",
      },
      {
        title: "设置",
        path: "/setting",
        name: "Setting",
        key: 6,
        icon: "SettingOutlined",
      },
    ]);
    //点击 MenuItem 调用此函数
    const handleClick = (item) => {
      console.log(item);
      router.push({
        name: item.name,
      });
    };

    return { ...toRefs(state), handleClick, asideMenu };
  },
};
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  top: 100px;
  left: 305px;
}
</style>