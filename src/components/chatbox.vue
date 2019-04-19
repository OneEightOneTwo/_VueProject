<template>
    <div class="chatbox">
        <header>  
            <img class="back" src="../assets/img/back.png" alt="">
        </header>
        <div class="ul">
            <li>
                <div class="left-head">
                    小红
                </div>
                <div class="main">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li class="clearfix">
                <div class="rigth-head">
                   user 
                </div> 
                <div class="main2" style="float: right;">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li>
                <div class="left-head">
                    小红
                </div>
                <div class="main">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li class="clearfix">
                <div class="rigth-head">
                   user 
                </div> 
                <div class="main2" style="float: right;">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li>
                <div class="left-head">
                    小红
                </div>
                <div class="main">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li class="clearfix">
                <div class="rigth-head">
                   user 
                </div> 
                <div class="main2" style="float: right;">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li>
                <div class="left-head">
                    小红
                </div>
                <div class="main">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
            <li class="clearfix">
                <div class="rigth-head">
                   user 
                </div> 
                <div class="main2" style="float: right;">
                    <p>这是内容这是内容这是内容这是内容这是内容这是内容</p>
                </div>
            </li>
        </div>
        <footer>
            <input class="text" type="text" >
            <input class="send" type="button" value="发送">
        </footer>

    </div>
</template>
<script>
import base from "../base_tel.css";

export default {};
</script>
<style>
.chatbox {
  display: flex;
  height: 100%;
  flex-direction: column;
}
header {
  width: 100%;
  height: 1.2rem;
  background: #a39590;
  padding: 0 0.066667rem 0 0.066667rem;
  display: flex;
  align-items: center;
}
.back {
  /* float: left; */
  width: 0.666667rem;
  height: 0.666667rem;
  display: inline-block;
}
.ul {
  width: 100%;
  background: #b8ac9d;
  flex: 1;
  /* overflow-x: hidden;
  overflow-y: auto; */
  overflow: auto;
  padding: 0.066667rem;
}
li {
  margin: 0.2rem;
}
.left-head {
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  border: 1px solid #ccc;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 50%;
  background: #333;
  font-size: 0.24rem;
  color: #fff;
  vertical-align: top;
  margin: 0.133333rem;
}
.main,
.main2,
.main3,
.main4 {
  width: 4.053333rem;
  padding: 0.133333rem;
  font-size: 0.346667rem;
  color: #333;
  line-height: 0.373333rem;
  background: #f0981c;
  border: 0.053333rem solid #ff0000;
  position: relative;
  -webkit-border-radius: 0.066667rem;
  -moz-border-radius: 0.066667rem;
  border-radius: 0.066667rem;
  display: inline-block;
}
/*左三角*/
.main:before,
.main:after {
  content: " ";
  border-top: 0.16rem solid transparent;
  border-bottom: 0.16rem solid transparent;
  border-right: 0.213333rem solid #ff0000;
  position: absolute;
  top: 0.2rem;
  left: -0.16rem;
}
.main:after {
  border-right: 0.16rem solid #f0981c;
  left: -0.106667rem;
}
/* 右边 */
.rigth-head {
  float: right;
  width: 1.226667rem;
  height: 1.226667rem;
  display: inline-block;
  border: 1px solid #ccc;
  line-height: 1.226667rem;
  text-align: center;
  border-radius: 50%;
  background: #333;
  font-size: 0.24rem;
  color: #fff;
  vertical-align: top;
  margin: 0.133333rem;
}
/*右三角*/
.main2:before,
.main2:after {
  content: " ";
  border-top: 0.16rem solid transparent;
  border-bottom: 0.16rem solid transparent;
  border-left: 0.213333rem solid #ff0000;
  position: absolute;
  top: 0.2rem;
  right: -0.16rem;
}
.main2:after {
  border-left: 0.16rem solid #f0981c;
  right: -0.106667rem;
}
footer {
  width: 100%;

  display: flex;
  padding: 0.133333rem;
}
.text {
  height: 1.2rem;
  width: 7.866667rem;
  border: 0.053333rem solid #ccc;
  border-radius: 0.533333rem;
  padding-left: 0.133333rem;
  box-shadow: 0.026667rem 0.026667rem 0.8rem;
}
.send {
  flex: 1;
  /* height: 1.2rem;
    height: .666667rem; */
  border-radius: 0.333333rem;
}
</style>
