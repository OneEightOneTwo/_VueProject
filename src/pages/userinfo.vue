<template>
    <div class="userinfo">
        <header class="Uhead" :style="{background:'url('+ user.background+')',backgroundSize:'cover'}">
            <div class="set">
                <a href="javascript:;" class="iconfont icon-shezhi"></a>
            </div>
            <div class="uInfo">
                <div class="uInfo_head">
                    <img :src="user.head" alt="">
                </div>
                <div class="uInfo_info">
                    <p class="info_name" v-text="user.name"></p>
                    <nav>
                    <li>
                        <i :class='["iconfont",user.sex==0 ? "icon-xingbie" : "icon-nan"]' ></i><em v-text="user.age"></em>
                        </li>
                    <li>
                        <i class="iconfont icon-daohang"></i><em v-text="user.region"></em>
                        </li>
                    <li>
                        <em v-text="user.constellation"></em>
                        </li>
                    </nav>
                </div>
                <div class="uInfo_more">
                    <a href="javascript:;" class="iconfont icon-right">

                    </a>
                </div>
            </div>
        </header>
        <main class="uMain">
            <nav>
                <li>
                    <span class="span_icon iconfont icon-xihuan"></span>
                    <span class="span_text">谁喜欢我</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                <li>
                    <span class="span_icon iconfont icon-wodedongtai"></span>
                    <span class="span_text">我的动态</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                <li>
                    <span class="span_icon iconfont icon-shouyewodebiaoqian"></span>
                    <span class="span_text">我的标签</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                <li>
                    <span class="span_icon iconfont icon-xingqu"></span>
                    <span class="span_text">兴趣爱好</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                <li>
                    <span class="span_icon iconfont icon-wode-wenda"></span>
                    <span class="span_text">我的问答</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
            </nav>
            <nav>
                <li>
                    <span class="span_icon iconfont icon-wodehuiyuan"></span>
                    <span class="span_text">我的会员</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                <li>
                    <span class="span_icon iconfont icon-tubiaozhizuomoban"></span>
                    <span class="span_text">我的钱包</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                
            </nav>
            <nav>
                <li>
                    <span class="span_icon iconfont icon-xinshouzhiyin"></span>
                    <span class="span_text">新手指引</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
                <li>
                    <span class="span_icon iconfont icon-tuichudenglu"></span>
                    <span class="span_text">退出登录</span>
                    <span class="span_more iconfont icon-right"></span>
                </li>
            </nav>
        </main>
    </div>
</template>
<script>
import base from "../base_tel.css"
import Bg2 from "../assets/img/02.jpg"
import img from "../assets/img/toux.jpg"
import icon from "../assets/font_userinfo/iconfont.css"
export default {
  data() {
    return {
      user: {
        use: '123456',
        head: img,
        background: Bg2,
        name: 'Sudong',
        age: '18',
        region: '天河区',
        constellation: '水瓶座',
        sex: 0
      }
    }
  }
}
</script>
<style scoped>
ul,
li {
  list-style: none;
}
.userinfo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Uhead {
  height: 5.173333rem;
  width: 100%;

  padding: 0 0.333333rem;
  padding-top: 0.373333rem;
}
/* 设置 */
.set {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.773333rem;
}
.set a {
  font-size: 0.666667rem;
  color: #fefcff;
}

/* 用户信息（头像，基本信息） */
.uInfo {
  display: flex;

  justify-content: space-between;
  padding-bottom: 0.773333rem;
}
.uInfo_head {
  width: 2.213333rem;
  height: 2.213333rem;
  border-radius: 50%;
  overflow: hidden;
}
.uInfo_head img {
  width: 100%;
  height: 100%;
}
.uInfo_info {
  width: 6.72rem;
  height: 2.213333rem;
  padding-left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.uInfo_info .info_name {
  font-size: 0.4rem;
  color: #fffefb;
}
.uInfo_info nav {
  height: 0.533333rem;
}
.uInfo_info nav li {
  /* list-style: none; */
  float: left;
  padding: 0 0.12rem;
  height: 100%;
  box-sizing: border-box;
  padding-top: 0.08rem;
}
.uInfo_info nav li {
  color: #fffbf9;
  font-size: 0.333333rem;
  line-height: 0.333333rem;
  margin-right: 0.133333rem;
  border-radius: 0.106667rem;
}
.uInfo_info nav li:nth-child(1) {
  background: #eb6d32;
}
.uInfo_info nav li:nth-child(2) {
  background: #bd3b2d;
}
.uInfo_info nav li:nth-child(3) {
  background: #a8c839;
}
.uInfo_info nav li i {
  vertical-align: middle;
  margin-right: 0.133333rem;
}
.uInfo_info nav li em {
  vertical-align: middle;
  text-decoration: none;
  font-style: normal;
}
.uInfo_more {
  padding-top: 0.773333rem;
  box-sizing: border-box;
}
.uInfo_more a {
  color: #feffff;
  font-size: 0.666667rem;
}
.uMain {
  flex: 1;
  background: #cfcfcf;
  overflow: auto;
}
.uMain nav {
  margin-top: 0.133333rem;
}
.uMain nav li {
  /* border-top: 0.013333rem solid #fefffa;
  border-bottom: 0.013333rem solid #fefffa; */
  margin-bottom: 0.04rem;
  height: 1.333333rem;
  background: #f6f5f1;
  padding: 0 0.32rem;
  line-height: 1.333333rem;
  display: flex;
}
.uMain nav li .span_icon {
  font-size: 0.666667rem;
  color: #b93729;
  vertical-align: middle;
  margin-right: 0.373333rem;
}
.uMain nav li .span_text {
  color: #010100;
  font-size: 0.346667rem;
}
.uMain nav li .span_more {
  font-size: 0.453333rem;
  color: #010100;
  text-align: left;
  flex: 1;
  text-align: right;
}
</style>


