<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img :src="swiperimg" alt="" />
      </div>
      <div class="swiper-slide">
        <img :src="swiperimg" alt="" />
      </div>
      <div class="swiper-slide">
        <img :src="swiperimg" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination swiper_pager">
        <div></div>
        <div></div>
        <div></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

// Import Swiper styles
export default {
  props: ["swiperimg"],
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {});
  },
};
</script>
<style>
.swiper-container {
   width: 40vw;
  height: 60.5333vw;
}

.swiper_pager{
  
width: 53.0667vw;
}
.swiper_pager div{
 background-color: #000000;
border: 3px solid #000000;
}
</style>