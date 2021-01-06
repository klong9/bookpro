<template>
  <div class="cart">
    <div class="top">
      <phoneTop></phoneTop>
      <topTitle :content="title"></topTitle>
    </div>
    <div class="content">
      <div class="content_top">
        <span>Books you Liked</span>
        <div class="top_right">
          <i class="iconfont">&#xe751;</i>
          <span>Filter</span>
          <i class="iconfont">&#xe666;</i>
        </div>
      </div>
      <div class="ul">
        <div
          class="li"
          @click="Jumpto('products', item)"
          v-for="item in bookinfo"
          :key="item.id"
        >
          <img :src="item.imgUrl" alt="" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <bottomNav></bottomNav>
      <bottomBrack></bottomBrack>
    </div>
  </div>
</template>
<script>
import topTitle from "./top_title";
import phoneTop from "./phone_top";
import bottomNav from "./bottom_nav";
import bottomBrack from "./bottom_brack";

export default {
  data() {
    return {
      title: "cart",
      bookinfo: [],
    };
  },
  mounted() {
    this.getarr();
  },
  methods: {
    getarr: function () {
      this.$axios.get("/api/books").then((res) => {
        this.bookinfo = res.data.info;
        console.log(this.bookinfo);
      });
    },
    Jumpto: function (str, item) {
      this.$router.push({ name: str, query: item });
    },
  },
  components: {
    topTitle: topTitle,
    phoneTop: phoneTop,
    bottomNav: bottomNav,
    bottomBrack: bottomBrack,
  },
};
</script>

<style>
.cart {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

}
.content {
  width: 100vw;
  height: 158.4vw;
  /* background: khaki; */
  flex: 1;
}
.content .content_top {
  display: flex;
  justify-content: space-between;
  padding: 2.6667vw 6.1333vw;
  font-weight: bold;
  font-size: 3.7333vw;
}
.content .content_top .top_right {
  width: 24.8vw;
  height: 6.4vw;
  line-height: 6.4vw;
  border: 0.2667vw solid #b1b1b1;
  border-radius: 0.8vw;
  color: #b1b1b1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content .content_top .top_right i{
 font-size: 2.9333vw;
}
.content .ul {
  height: 116.4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
}
.content .ul .li {
  width: 26.6667vw;
  height: 37.6vw;
  margin: 6.4vw;
  flex: 0 0 26%;
}
.content .ul .li img {
  width: 100%;
  height: 100%;
}
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>