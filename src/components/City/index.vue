<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>北京</li>
          <li>成都</li>
          <li>重庆</li>
          <li>武汉</li>
          <li>西安</li>
          <li>厦门</li>
          <li>深圳</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="item in cityList" :key="item.title">
          <h2>{{item.title}}</h2>
          <ul>
            <li v-for="item in item.lists" :key="item.id">{{item}}</li>
          </ul>
        </div>
      </div>
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
      cityList: []
    };
  },
  mounted() {
    this.cityList = city.city;
  },
  methods:{
    handleToIndex(index){
      var h2 = this.$refs.city_sort.getElementsByTagName('h2')
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop 
    }
  }
};
</script>

<style scoped>
</style>
