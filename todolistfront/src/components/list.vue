<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item name="1">
      <template slot="title"><h2>未完成</h2></template>
      <IncompletedItem
        v-for="p of this.$store.getters.incompleted"
        :key="p.id"
        :id="p.id"
        :content="p.content"
      ></IncompletedItem>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template slot="title"><h2>已完成</h2></template>
      <CompletedItem
        v-for="p of this.$store.getters.completed"
        :key="p.id"
        :id="p.id"
        :content="p.content"
      ></CompletedItem>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import IncompletedItem from "./incompletedItem.vue";
import CompletedItem from "./completedItem.vue";
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  components: { IncompletedItem, CompletedItem },
};
</script>
<style lang="less" scoped>
</style>