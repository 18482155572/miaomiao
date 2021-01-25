<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in nowPlaying" :key="item.id">
        <div class="pic_show"><img :src="item.img | setWH('128.180')" /></div>
        <div class="info_list">
          <img v-if="item.version=='v2d imax'" src="@/assets/2DIMAX.jpg" alt="">
          <img v-if="item.version=='v3d'" src="@/assets/3D.jpg" alt="" style="width:25px">
          <h2>{{item.nm}}</h2>
          <p>观众评 <span class="grade">{{item.sc}}</span></p>
          <p>{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
import NowPlaying from "./nowPlaying.json";
export default {
  name: "NowPlaying",
  data() {
    return {
      nowPlaying: []
    };
  },
  mounted() {
    this.nowPlaying = NowPlaying.movieList;
  }
};
</script>

<style scoped>

</style>
