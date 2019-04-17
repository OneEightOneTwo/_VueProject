<template>
  <div class="login">
    <header>
        <a href="###"><img src="" alt=""></a>
    </header>
    <div calss="zc">
      <p>
        <input type="button" value="登陆">
      </p>
      <p>
        <input type="button" value="注册">
      </p>
    </div>
  </div>
</template>
<script>
// import picArticle1 from "../assets/img/02.jpg";
import base from "../base_tel.css";
export default {
  data() {
    return {
      //   base
    };
  }
};
</script>
<style>
html,
body{
  height: 100%;
}
body {
  background: url(../assets/img/02.jpg) no-repeat;
  background-size: cover;
}
.login {
  height: 100%;
    display: flex;
    flex-direction:column;
}
ul,
li {
  list-style: none;
}
header {
    height: 8.973333rem;
    /* background: pink; */
    flex: 1;
    align-items: center;                           
}
header a{
    
    display: block;
    width: 2.693333rem;
    height: 2.693333rem;
    background: red;
}
header a img{
    width: 100%;
    height: 100%;
}
.zc{
    flex: 1;
    height: 2.666667rem;
}
</style>


