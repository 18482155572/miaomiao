<template>
  <div class="movie_body">
    <Loading v-if="isLoading"/>
    <scroller v-else>
      <ul>
        <li v-for="item in ComingSoon" :key="item.id">
          <div class="pic_show"><img :src="item.img | setWH('128.180')" /></div>
          <div class="info_list">
            <h2>{{item.nm}}</h2>
            <img v-if="item.version=='v2d imax'" src="@/assets/2DIMAX.jpg" alt="">
            <img v-if="item.version=='v3d'" src="@/assets/3D.jpg" alt="" style="width:25px">
            <p><span class="person">{{item.wish}}</span> 人想看</p>
            <p>{{item.star}}</p>
            <p>{{item.comingTitle}}</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
import ComingSoon from "./comingSoon.json";
export default {
  name: "ComingSoon",
  data() {
    return {
      ComingSoon: [],
      isLoading : true
    };
  },
  mounted() {
    this.ComingSoon = ComingSoon.coming;
    this.isLoading = false
  }
};
</script>

<style scoped>
</style>
