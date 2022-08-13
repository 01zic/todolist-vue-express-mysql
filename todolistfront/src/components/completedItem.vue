<template>
  <el-row :gutter="20" type="flex" class="row-bg">
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="gird-content">
      <el-input v-model="input" :disabled="true"> </el-input>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="gird-content">
      <!-- 删除按钮 -->
      <el-popover
        placement="left"
        title="删除"
        width="200"
        trigger="hover"
        content="任务完成后，可以删除！"
      >
        <el-button
          slot="reference"
          type="danger"
          icon="el-icon-delete"
          circle
          @click="deleteItem"
        ></el-button>
      </el-popover>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["content", "id"],
  data() {
    return {
      input: this.content,
      show: "true",
      selectedId: this.id,
    };
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteHomeItems", this.selectedId);
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  .el-col:nth-child(1) {
    margin-left: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  display: flex;
  justify-content: center;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>