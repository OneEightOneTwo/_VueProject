<template>
  <div class="Bigbox">
    <header>
      <!-- 左图标 -->
      <a class="header-a" href="javascrit:;">
        <img src="../assets/img/user.png" alt>
      </a>
      <!-- 中间图标 -->
      <a href="javascrit:;">探探</a>
      <!-- 右图标 -->
      <a href="javascrit:;">
        <img src="../assets/img/gantan.png" alt>
      </a>
    </header>
    <!-- 滑动 -->
    <div id="photo_box">
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import base from "../base_tel.css"
import phone from "../assets/css/photoSwipe.css"
import phone1 from "../assets/js/jquery-3.1.1.min.js"
import phone2 from "../assets/js/photoSwipe.js"
export default {
}
</script>
<style scoped>
.Bigbox {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
header {
  width: 100%;
  height: 1.186667rem;
  background: #d74e37;
  padding: 0 0.077777rem 0 0.077777rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-a {
  display: inline-block;
  width: 0.933333rem;
  height: 0.933333rem;
}
header a:nth-of-type(3){
  display: inline-block;
  width: 0.933333rem;
  height: 0.933333rem;
}
img {
  width: 85%;
  height: 90%;
}
a {
  font-size: 0.48rem;
  color: #fff;
}
#photo_box{
  padding-top: 0.266667rem;
  flex: 1;
}
</style>