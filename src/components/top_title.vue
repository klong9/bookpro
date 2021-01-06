<template>
  <div class="top_title">
    <i class="iconfont" @click="previous">&#xe685;</i>
    <div class="top_content">{{ content }}</div>
    <i class="iconfont" @click="Jumpto('payment')">&#xe641;</i>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {};
  },
  methods: {
    previous: function () {
      this.$router.go(-1);
    },
    Jumpto: function (str) {
      this.$router.push({
        name: str,
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.top_title {
  width: calc(100vw-12.8vw);
  height: 12.5333vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 2.6667vw solid #f4f5f7;
  padding: 0 6.4vw;
  font-size: 4.2667vw;
  font-weight: bold;
}
/* .top_content{
} */
.top_title i {
  font-size: 4.2667vw;
}
</style>