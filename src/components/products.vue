<template>
  <div class="products">
    <!-- 顶部 -->
    <phoneTop></phoneTop>
    <topTitle :content="title"></topTitle>
    <div class="content">
      <div class="content_top">
        <div class="top_left">{{ Typesof }}</div>
        <div class="top_right">{{ Awarded }}</div>
      </div>
      <div class="content_swiper">
        <!-- 价格 -->
        <div class="swiper_price">${{ info.price }}</div>
        <!-- <div class="content_img"><img :src="info.imgUrl" alt=""></div> -->
      <!-- 轮播图 -->
      <swiper class="content_img" :swiperimg="info.imgUrl"></swiper>

        <div class="aixing">
          <i class="iconfont">&#xe8ab;</i>
        </div>
      </div>
      <!-- 其他价格 -->
      <div class="other_price">
        <span>{{ OtherPricesTitle }}</span>
        <div class="other_prices_items">
          <div
            class="other_price_con"
            v-for="(item, index) in info.otherPrice"
            :key="index"
          >
            <span>{{ item.platform }}</span>
            <span>${{ item.price }}</span>
          </div>
        </div>
        <!-- 数量 -->
        <div class="quantity">
          <div class="quantity_title">Quantity</div>
          <div class="quantity_operating">
            <i class="iconfont" @click="subcount">&#xe67a;</i>
            <span>{{ count }}</span>
            <i class="iconfont" @click="addcount">&#xe664;</i>
          </div>
        </div>
        <!-- 简介 -->
        <div class="Introduction">
          <p>{{info.des}}</p>
        </div>
      </div>

    </div>

    <div class="bottom">
      <buyNow :show="true" :buy_content="info" :buy_count="count"></buyNow>
      <bottomBrack></bottomBrack>
    </div>
  </div>
</template>

<script>
import phoneTop from "./phone_top";
import topTitle from "./top_title";
import bottomBrack from "./bottom_brack";
import buyNow from "./buy_now";
import Swiper from "./swiper.vue";

export default {
  data() {
    return {
      title: "products",
      Typesof: "Science & Technology",
      Awarded: "New York Times Bestseller",
      OtherPricesTitle: "Formats and editions",
      info: "",
      num: 1,
      count:1,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo: function () {
      this.info = this.$route.query;
    },
    subcount:function(){
      if(!this.count){
        console.log(this.count);
      }else{
        this.count--;

      }
    },
    addcount:function(){
      this.count++;
    }
  },
  components: {
    phoneTop,
    topTitle,
    bottomBrack: bottomBrack,
    buyNow,
    Swiper,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.products{
  display: flex;
  flex-direction: column;
  /* overflow: scroll; */
}
.content {
  width: 100vw;
  height: 149.8667vw;
  overflow: scroll;
}
.content .content_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.4vw;
  font-size: 3.4667vw;
}
.content .content_top .top_left {
  color: #818181;
}
.content .content_top .top_right {
  height: 7.2vw;
  background: #000;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 7.2vw;
  padding: 0 1.3333vw;
  border-radius: 1.0667vw;
}
.content_img{
  position: absolute;
  top: 13.3333vw;
  left:26.4vw;
}
.content_img img{
  width: 40vw;
  height: 60.5333vw;
}
.content_swiper {
  position: relative;
  height: 93.3333vw;
  margin: 0 3.7333vw;
  border-bottom: 1px solid #e3e3e3;
}
.content_swiper .swiper_price {
  font-size: 4.8vw;
  font-weight: bold;
  position: absolute;
  top: 0.5333vw;
  left: 2.6667vw;
}
.content_swiper .aixing {
  position: absolute;
  top: 73.3333vw;
  left: 81.0667vw;
  width: 8.8vw;
  height: 8.8vw;
  background: #e7e7e7;
  line-height: 8.8vw;
  text-align: center;
  border-radius: 4.5333vw;
}
.content_swiper .aixing i{
  font-size: 4.8vw;

}
.other_price {
  margin-left: 6.6667vw;
  line-height: 8vw;
}
.other_price > span {
  font-size: 3.2vw;
  font-weight: bold;
}
.other_prices_items {
  display: flex;
  overflow: scroll;
}
.other_prices_items .other_price_con {
  width: 30.4vw;
  height: 8vw;
  line-height: 8vw;
  border-radius: 4.5333vw;
  border: 1.5px solid #c4c4c4;
  text-align: center;
  font-size: 3.2vw;
  margin-right: 2.1333vw;
}
.quantity{
  line-height: 8vw;
  /* margin-left: 6.4vw; */
}
.quantity .quantity_title{
  font-size: 3.7333vw;
  font-weight: bold;
}
.quantity .quantity_operating{
  width: 30.4vw;
  height: 8vw;
  border: 0.4vw solid #c4c4c4;
  border-radius: 4.5333vw;
  display: flex;
  justify-content: space-around;
}
.quantity .quantity_operating i,.quantity .quantity_operating span{
  font-size: 3.7333vw;
  font-weight: bold;
}
.Introduction{
  width: 81.0667vw;
  font-size: 3.4667vw;
  font-weight: bold;
  margin-top: 4vw ;

}
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>