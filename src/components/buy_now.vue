<template>
  <div class="buy_now" :class="[show?'':classed]">
    <div
      class="left"
      v-show="show"
      @click="addToGlobal"
    >
      {{ addCart }}
    </div>
    <div class="right" @click="buyed">{{ buy }}</div>
  </div>
</template>

<script>
export default {
  props: ["show", "buy_content", "buy_count"],
  data() {
    return {
      addCart: "Add to cart",
      buy: "Buy Now",
      classed: "buy_nowed",
    };
  },
  methods: {
    addToGlobal() {
      this.buy_content.count = this.buy_count;
      this.$store.commit("AddModify", this.buy_content);
      this.Jumpto('payment')
    },
    Jumpto: function (str) {
      this.$router.push({ name: str });
    },
    buyed:function(){
      this.$emit("buy_success")
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.buy_now {
  width: calc(100vw-8.8 * 2vw);
  height: 13.0667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8.8vw;
  font-weight: bold;
  text-align: center;
  line-height: 9.8667vw;
  background: #fff;
}
.buy_nowed {
  display: flex;
  justify-content: center;
}

.buy_now .left {
  width: 28vw;
  border-radius: 5.0667vw;
  background: #efeded;
  font-size: 3.7333vw;
  color: #818181;
  line-height: 9.8667vw;
}
.buy_now .right {
  width: 49.6vw;
  height: 9.8667vw;
  border-radius: 5.0667vw;
  background: #060aff;
  font-size: 4.2667vw;
  color: #fff;
}
</style>