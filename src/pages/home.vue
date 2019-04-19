<template>
    <div class="home">
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<script>
import bottom from '../components/bottom.vue'
export default {
  name:'app',
  components: {
    bottom
  }
}
</script>

<style scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>


