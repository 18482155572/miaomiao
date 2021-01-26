<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"/>
    <scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd"> 
      <ul>
        <li class="pulldown">{{ pullDownMsg }}</li>
        <li v-for="item in nowPlaying" :key="item.id">
          <div class="pic_show" @tap="handleToDetail(item.id)">
            <img :src="item.img | setWH('128.180')" />
          </div>
          <div class="info_list">
            <img
              v-if="item.version == 'v2d imax'"
              src="@/assets/2DIMAX.jpg"
              alt=""
            />
            <img
              v-if="item.version == 'v3d'"
              src="@/assets/3D.jpg"
              alt=""
              style="width:25px"
            />
            <h2 @tap="handleToDetail(item.id)">{{ item.nm }}</h2>
            <p>
              观众评 <span class="grade">{{ item.sc }}</span>
            </p>
            <p>{{ item.star }}</p>
            <p>{{ item.showInfo }}</p>
          </div>
          <div class="btn_mall">购票</div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import NowPlaying from "./nowPlaying.json";
export default {
  name: "NowPlaying",
  data() {
    return {
      nowPlaying: [],
      pullDownMsg: "",
      isLoading:true,
      prevCityId:-1  
    };
  },
  // mounted只执行一次，而activated每次载入都会执行
  activated() {
    // axios获取数据，利用prevCityId判断选择的城市是否发生跳转，以此来判断是否再次发送axios
    // var cityId = this.$store.state.city.id
    // if(this.prevCityId === cityId){return}
    // this.isLoading = true
    // this.axios.get('/api/movieOninfoList?cityId='+cityId).then((res)=>{
    //   var msg = res.data.msg
    //   if(msg === 'ok'){
    //     this.movieList = res.data.data.movieList
    //     this.isLoading = false
    //     this.prevCityId = cityId
    //   }
    // })
    this.nowPlaying = NowPlaying.movieList;
    this.isLoading = false
    // this.$nextTick(() => {
    //   //$nextTick数据获取完毕后再通过回调的方式执行内部方法
    //   var scroll = new BScroll(this.$refs.movie_body, {
    //     tap: true,
    //     probeTybe: 1,
    //     click: true
    //   })
    // scroll.on("refresh", (pos) => {
    //   // console.log('refresh')
    //   this.pullDownMsg = "正在更新中";
    //   setTimeout(()=>{
    //     this.pullDownMsg = ""
    //   },1000)
    // })
    //   scroll.on("touchEnd", (pos) => {
    //     // console.log("touchEnd");
    //       if (pos.y > 30) {
    //       //当拖拽大于30px的时候
    //       this.nowPlaying = NowPlaying.movieList;
    //       this.pullDownMsg = "内容刷新成功";
    //       setTimeout(()=>{
    //         this.pullDownMsg = ""
    //       },1000)
    //     }
    //   })
    // })
    // setTimeout(()=>{
    //   this.scroll = new BScroll(this.$refs.movie_body,{
    //     tap: true,
    //   });
    // },20)
  },
  methods: {
    handleToDetail(movieId) {
      this.$router.push('/movie/detail/1/'+movieId)
    },
    handleToScroll(pos) {
      this.pullDownMsg = "正在更新中";
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        //当拖拽大于30px的时候
        this.nowPlaying = NowPlaying.movieList;
        this.pullDownMsg = "内容刷新成功";
        setTimeout(() => {
          this.pullDownMsg = "";
        }, 1000);
        setTimeout(() => {
          this.pullDownMsg = "";
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.movie_body .pulldown {
  margin: 0;
  padding: 0;
  border: none;
}
</style>
