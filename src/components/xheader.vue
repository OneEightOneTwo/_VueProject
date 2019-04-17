<template>
    <div>
        <header>
        <!-- 左图标 -->
            <a href="javascrit:;">
                <img src="../assets/img/user.png" alt="">
            </a>
            <!-- 中间图标 -->
            <a href="javascrit:;">探探</a>
            <!-- 右图标 -->
            <a href="javascrit:;">
                <img src="../assets/img/gantan.png" alt="">
            </a>
        </header>   

        <div id="photo_box">
            <div><div>
            </div></div>
        </div>

        <footer>

        </footer>
    </div>   
</template>

<script>
import base from "../base_tel.css";
import phone from "..//assets/css/photoSwipe.css";
import phone1 from "..//assets/js/jquery-3.1.1.min.js";
import phone2 from "../assets/js/photoSwipe.js";
export default {};
</script>
<style>
header {
  width: 100%;
  height: 90px;
  background: #d74e37;
  padding: 0 5px 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 50px;
  height: 50px;
}
a {
  font-size: 36px;
  color: #fff;
}
</style>
