<template>
  <el-container>
    <el-header>
      <headers> </headers>
    </el-header>
    <el-main>
      <List></List>
    </el-main>
  </el-container>
</template>

<script>
import headers from "../components/header.vue";
import List from "../components/list.vue";
export default {
  name: "App",
  components: {
    headers,
    List,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHomeItems");
  },
};
</script>

<style lang="less" scoped>
.el-container {
  background-color: antiquewhite;
}
.el-header {
  margin-top: 50px;
  margin-bottom: 30px;
}

/deep/ .el-collapse-item__header {
  font-size: 25px;
  color: rgb(209, 107, 107);
  justify-content: space-around;
}

/deep/ .el-collapse-item__arrow {
  margin: 0 0 0 0;
}
</style>
