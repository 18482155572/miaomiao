<template>
  <div class="city_body">
    <div class="city_list" >
      <Loading v-if="isLoading"/>
      <scroller ref="city_List" v-else>
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
              <ul class="clearfix">
                <li @tap="handleToCity('上海','S0')">上海</li>
                <li @tap="handleToCity('北京','B0')">北京</li>
                <li @tap="handleToCity('成都','C1')">成都</li>
                <li @tap="handleToCity('重庆','C0')">重庆</li>
                <li @tap="handleToCity('武汉','W0')">武汉</li>
                <li @tap="handleToCity('西安','X1')">西安</li>
                <li @tap="handleToCity('厦门','X0')">厦门</li>
                <li @tap="handleToCity('深圳','S1')">深圳</li>
              </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.title">
              <h2>{{item.title}}</h2>
              <ul>
                <li v-for="(i, index) in item.lists" :key="index" @tap="handleToCity(i,item.title+index)">{{i}}</li>
              </ul>
            </div>
          </div>
        </div>
      </scroller>
    </div>
    <div class="city_index">
      <ul v-for="(item,index) in cityList" :key="item.title" @touchstart="handleToIndex(index)">
        <li>{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import city from "./city.json";
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      isLoading:true
    };
  },
  mounted() {
    var cityList = window.localStorage.getItem('cityList')
    if(cityList){
      this.cityList = JSON.parse(cityList)
      this.isLoading = false
    }
    else{   
      this.cityList = city.city
      this.isLoading = false
      window.localStorage.setItem('cityList',JSON.stringify(city.city)) //本地存储
      }
  },
  methods:{
    handleToIndex(index){
      var h2 = this.$refs.city_sort.getElementsByTagName('h2')
      // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop 
      this.$refs.city_List.toScrollTop(-h2[index].offsetTop)
    },
    handleToCity(nm,id){
      this.$store.commit('city/CITY_INFO',{nm,id})
      window.localStorage.setItem('nowNm',nm)
      window.localStorage.setItem('nowId',id)
      this.$router.push('/movie/nowPlaying')
    }
  }
};
</script>

<style scoped>
</style>
