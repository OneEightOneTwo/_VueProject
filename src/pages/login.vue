<template>
  <div class="login">
    <header>
      <a href="###">
        <img src="../assets/img/toux.jpg" alt>
      </a>
      <p class="tt">探探</p>
    </header>
    <div class="zc">
      <p>
        <input type="button" value="登陆">
      </p>
      <p>
        <input type="button" value="注册">
      </p>
    </div>
    <div class="xiahua">
      <p>第三方直接登陆</p>
      <span></span>
      <span></span>
    </div>
    <div class="san">
      <a href="###">
        <img src="../assets/img/qq.png">
      </a>
      <a href="###">
        <img src="../assets/img/weixin.png">
      </a>
      <a href="###">
        <img src="../assets/img/weibo.png">
      </a>
    </div>
  </div>
</template>
<script>
import base from "../base_tel.css";
export default {
  data() {
    return {};
  }
};
</script>
<style>
html,
body {
  height: 100%;
}
body {
  background: url(../assets/img/02.jpg) no-repeat -250px ;
  background-size: cover;
}
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
}
ul,
li {
  list-style: none;
}
header {
  height: 8.973333rem;
  /* background: pink; */
  flex: 1;
}
header a {
  margin-top: 1.733333rem;
  margin-left: 3.64rem;
  border-radius: 50%;
  display: block;
  width: 2.693333rem;
  height: 2.693333rem;
  background: red;
  overflow: hidden;
}
header a img {
  width: 100%;
  height: 100%;
}
.zc {
  flex: 1;
  height: 2.666667rem;
  padding: 0 0.306667rem;
}
.tt {
  font-size: 0.573333rem;
  text-align: center;
  color: #fff;
  margin-top: 0.36rem;
}
.zc input {
  width: 100%;
  height: 1.2rem;
  background: #c8462e;
  border: 0;
  border-radius: 0.52rem;
  font-size: 0.453333rem;
  color: #fff;
}
.zc p:nth-of-type(2) input {
  margin-top: 0.266667rem;
  background: none;
  box-sizing: border-box;
  border: 0.026667rem #c8462e solid;
}
.xiahua {
  position: relative;
  height: 2.426667rem;
  width: 100%;
  padding: 0 0.306667rem;
}
.xiahua > p {
  font-size: 0.453333rem;
  color: #c8462e;
  text-align: center;
  margin-top: 1.306667rem;
  position: relative;
  padding: 0 0.306667rem;
}
.xiahua span {
  display: block;
  position: absolute;
  height: 0.026667rem;
  background: #c8462e;
  width: 3.093333rem;
  z-index: -1;
}
.xiahua span:nth-of-type(1) {
  top: 1.546667rem;
  left: 0.346667rem;
}
.xiahua span:nth-of-type(2) {
  top: 1.546667rem;
  right: 0.346667rem;
}
.san {
  width: 100%;
  margin-top: 0.6rem;
  text-align: center;
}
.san a {
  display: inline-block;
  height: 1.066667rem;
  width: 1.066667rem;
  overflow: hidden;
  margin: 0 0.4rem;
}
.san a img {
  width: 100%;
  height: 100%;
}
</style>


