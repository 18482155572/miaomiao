<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
    <!-- 在子组件中写入slot，slot所在的位置就是父组件要显示的内容 -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function() {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function() {}
    }
    
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeTybe: 1,
      click: true
    })
    this.scroll = scroll

    scroll.on("scroll", (pos) => {
        this.handleToScroll(pos)
    })
    scroll.on("touchEnd", (pos) => {
        this.handleToTouchEnd(pos)
    })
  },
  methods:{
      toScrollTop(y){
          this.scroll.scrollTo(0,y)
      }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
