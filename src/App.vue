<template>
  <!-- 进行缓存操作，vue自带组件 -->
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>