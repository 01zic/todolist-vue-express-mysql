<template>
  <div class="header">
    <div class="noteTitle">
      <Note></Note>
      <h1 class="h1">
        <p>Todolist</p>
      </h1>

      <router-link to="/explain">
        <el-button type="info" round>说明</el-button></router-link
      >
    </div>
    <el-input
      placeholder="输入内容后请按回车"
      v-model="input"
      clearable
      @keyup.enter.native="add"
    >
    </el-input>
  </div>
</template>

<script>
import Note from "./note.vue";
export default {
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    // console.log(this.$store.state.home);
  },
  methods: {
    add() {
      // 判断是否非空
      if (!this.input.trim()) return alert("输入不能为空");
      const content = this.input;
      this.$store.dispatch("addHomeItems", content);
    },
  },
  components: { Note },
};
</script>

<style lang="less" scoped>
.noteTitle {
  display: flex;
}
.noteTitle .h1 {
  // text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  flex: 1;
}
.h1 p {
  text-align: center;
}
</style>