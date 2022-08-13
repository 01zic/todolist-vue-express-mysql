<template>
  <el-row :gutter="20" type="flex" class="row-bg" :v-show="show">
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="gird-content">
      <el-input
        placeholder="请编辑内容，编辑完成后，请按回车！"
        v-model="input"
        :readonly="isEdit"
        @keyup.enter.native="editCompleted"
        ref="elInput"
        clearable
      >
      </el-input>
    </el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="gird-content">
      <!-- 编辑按钮 -->
      <el-popover
        placement="left"
        title="编辑"
        width="200"
        trigger="hover"
        content="编辑完成后，请按回车！"
      >
        <el-button
          slot="reference"
          type="primary"
          icon="el-icon-edit"
          circle
          @click="edit"
        ></el-button>
      </el-popover>
    </el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="gird-content">
      <!-- 完成按钮 -->
      <el-popover
        placement="left"
        title="完成"
        width="200"
        trigger="hover"
        content="完成后将加入已完成"
      >
        <el-button
          slot="reference"
          type="success"
          icon="el-icon-check"
          circle
          @click="done"
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
      isEdit: true,
      show: true,
      seletedId: this.id,
      doneValue: 0,
    };
  },
  methods: {
    edit() {
      this.isEdit = false;
      this.$refs.elInput.focus();
    },
    done() {
      this.doneValue = 1;
      this.$store.dispatch("updateHomeItems", {
        id: this.seletedId,
        value: this.input,
        done: this.doneValue,
      });
    },
    editCompleted() {
      if (!this.input) {
        alert("修改不能为空");
        return;
      }
      this.isEdit = true;
      this.$store.dispatch("updateHomeItems", {
        id: this.seletedId,
        value: this.input,
        done: this.doneValue,
      });
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