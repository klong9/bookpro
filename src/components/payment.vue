<template>
  <div class="payment">
    <phoneTop></phoneTop>
    <topTitle :content="title"></topTitle>
    <div class="payment_content">
      <div class="ShoppingList">
        <div class="shopping_li" v-for="(item, index) in bookarr" :key="index">
          <div class="left_img">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="right">
            <p>{{ item.bookName }}</p>
            <span>{{ item.author }}</span>
            <div class="right_quantity">
              <i class="iconfont" @click="subcount">&#xe67a;</i>
              <span>{{ item.count }}</span>
              <i class="iconfont" @click="addcount">&#xe664;</i>
            </div>
            <div class="right_price">${{ item.price }}</div>
          </div>
        </div>
      </div>
      <div class="bill">
        <div class="bill_title">{{ Bill.title }}</div>
        <div class="bill_prices">
          <span>{{ Bill.prices.bn_tit }}</span>
          <span>${{ Bill.prices.bn_price }}</span>
        </div>
        <div class="bill_prices">
          <span>{{ Bill.prices.sptit }}</span>
          <span>${{ Bill.prices.sp_price }}</span>
        </div>
        <div class="bill_prices">
          <span>{{ Bill.stocks }}</span>
        </div>
        <div class="bill_prices">
          <span>{{ Bill.Addressdate }}</span>
        </div>
      </div>
      <div class="payment_success" v-show="isshow">
        <i class="iconfont">&#xe723;</i>
        <span>Payment Success</span>
        <div class="order"><span>Check Order</span></div>
      </div>
    </div>
    <div class="bottom">
      <buyNow :show="false" @buy_success="success"></buyNow>
      <bottomBrack></bottomBrack>
    </div>
  </div>
</template>

<script>
import phoneTop from "./phone_top";
import topTitle from "./top_title.vue";
import buyNow from "./buy_now";
import bottomBrack from "./bottom_brack";

export default {
  data() {
    return {
      title: "Payment",
      count:1,
      isshow:false,
      Bill: {
        title: "Billing Information",
        prices: {
          bn_tit: "Buy new",
          bn_price: 0,
          sptit: "Shipping",
          sp_price: 3,
        },
        stocks: "Only 6 left in stock (more on the way).",
        Addressdate:
          "This item ships to 18 Wall St, Us. Get it by Thursday, April 16 - Friday, April 24 Choose this date at checkout.",
      },
    };
  },
  
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts: function () {
      this.bookarr.forEach((element) => {
        this.Bill.prices.bn_price += element.price * element.count;
      });
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
    },
    success:function(){
      this.isshow=!this.isshow;
    }
  },

  components: { topTitle, phoneTop, buyNow, bottomBrack },
  computed: {
    bookarr() {
      return this.$store.state.bookarr;
    },
  },
};
</script>

<style>
.payment {
  background: #f5f6f8;
  position: relative;
}
.payment_content {
  width: 100vw;
  height: 156vw;
  overflow: scroll;
}
.ShoppingList {
  width: calc(100vw-6.4vw * 2);
  /* height: 76.2667vw; */
  /* padding: 0 6.4vw; */
  background: #fff;
}
.shopping_li {
  width: 87.2vw;
  height: 29.0667vw;
  /* background: khaki; */
  margin: 0 6.4vw;
  padding: 3.4667vw 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
}
.shopping_li .left_img {
  width: 19.7333vw;
  height: 29.0667vw;
}
.shopping_li .left_img img {
  width: 100%;
  height: 100%;
}
.shopping_li .right {
  margin-left: 4.8vw;
  position: relative;
}
.shopping_li .right > p {
  font-size: 3.4667vw;
  font-weight: bold;
}
.shopping_li .right > span {
  font-size: 3.2vw;
}
.shopping_li .right .right_quantity {
  width: 24vw;
  height: 6.4vw;
  display: flex;
  font-size: 3.7333vw;
  font-weight: bold;
  justify-content: space-around;
  align-items: center;
  border-radius: 3.2vw;
  background-color: #efeded;
  position: absolute;
  top: 22.4vw;
  left: 0;
}
.shopping_li .right .right_quantity i{
  font-size: 3.7333vw;

}

.shopping_li .right .right_price {
  width: 10.9333vw;
  background-color: #efeded;
  text-align: center;
  border-radius: 3.2vw;
  font-size: 3.4667vw;
  position: absolute;
  top: 22.4vw;
  left: 49.8667vw;
}

.bill {
  /* width: 100vw; */
  /* height: 77.3333vw; */
  background: #fff;
  padding: 2.4vw 6.4vw;
}
.bill .bill_title {
  line-height: 11.2vw;
  font-size: 3.7333vw;
  font-weight: bold;
}
.bill .bill_prices {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 8vw;
  padding: 3.7333vw 0;
  border-bottom: 1px solid #e3e1e1;
}
.bill .bill_prices span {
  font-weight: bold;
  font-size: 3.7333vw;
  color: #b1b1b1;
}
.bill .bill_prices span:nth-child(2) {
  color: #000;
}
.payment_success {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 87.2vw;
  height: 88.5333vw;
  border-radius: 7.2vw;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.payment_success i {
  font-size: 24vw;
  color: #4bb543;
  margin-top: 18.6667vw;
}
.payment_success>span {
  font-weight: bold;
  font-size: 4.8vw;
  margin-top: 6.9333vw;
}
.payment_success .order{
  width: 53.3333vw;
  /* height: 12vw; */
  margin: 0 auto;
  margin-top: 11.7333vw;
  line-height: 12vw;
  font-weight: bold;
  background-color: #efeded;
  border-radius: 6.1333vw;
}
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>