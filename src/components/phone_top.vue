<template>
  <div class="phone_top">
      <div class="top_time">9:41</div>
      <div class="right">
        <i class="iconfont">&#xe66f;</i>
        <i class="iconfont">&#xe635;</i>
        <i class="iconfont">&#xe61b;</i>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.phone_top{
    width:calc(100vw-8.8vw*2);
    height: 5.4187vh;
    font-size: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8.8vw;
    background: #fff;
}
.phone_top .right i{
  font-size: 4vw;
}
</style>