<template>
    <div class="discover">
        <header class="dHead">
            <nav>
                <li v-for="(input,idx) in aInputs" v-text="input.type" :class="{active:idx===active}" @click="Active(idx)"></li>
            </nav>
            <span class="add iconfont icon-icon02"></span>
        </header>
        <main class="dMain">
            <nav>
                <li v-for="(con,idx) in inners">
                    <div class="dTop">
                        <div class="dImg">
                            <img :src="con.head" alt="">
                        </div>
                        <div class="dInfo">
                            <span v-text="con.name"></span>
                            <nav>
                                <li>
                                   <i :class='["iconfont",con.sex==0 ? "icon-xingbie" : "icon-nan"]'></i>
                                   <em v-text="con.age"></em> 
                                </li>
                                <li>
                                   <em v-text="con.constellation"></em> 
                                </li>
                            </nav>
                        </div>
                        <div class="dTime">
                          2分钟前
                        </div>
                    </div>
                    <div class="dInner">
                        <p v-text="con.inner"></p>
                        <img :src="con.img" alt="">
                    </div>
                    <div class="interaction">
                        <div class="watch">
                          <p class="watch-top"><span v-text="con.distance"></span>
                              <span v-text="con.Like+'赞'"></span>
                              <span v-text="con.read+'阅读'"></span></p>
                          <p class="watch-bottom">
                            <span class="iconfont icon-zan1"></span>
                            <span class="iconfont icon-pinglun1"></span>
                          </p>
                        </div>
                        <div class="more">
                          <span class="iconfont icon-gengduo"></span>
                        </div>
                    </div>
                </li>
            </nav>
        </main>
    </div>
</template>
<script>
import base from "../base_tel.css"
import icon from "../assets/font_discover/iconfont.css"
import head from "../assets/img/02.jpg"
import img from "../assets/img/03.jpeg"
import icon2 from "../assets/font_userinfo/iconfont.css"

export default {
  data() {
    return {
      aInputs: [
        {
          type: '附近的人'
        },
        {
          type: '朋友圈'
        }
      ],
      inners: [
        {
          head: head,
          name: '小红',
          inner:
            '今天天气真',
          img: img,
          time: 555555555555,
          distance: '200m',
          Like: 200,
          read: 200,
          sex: 0,
          age: 18,
          constellation: '处女座'
        },
        {
          head: head,
          name: '小红',
          inner: '今天天气真好',
          img: img,
          time: 555555555555,
          distance: '200m',
          Like: 200,
          read: 200,
          sex: 0,
          age: 18,
          constellation: '处女座'
        },
        {
          head: head,
          name: '小红',
          inner: '今天天气真好',
          img: img,
          time: 555555555555,
          distance: '200m',
          Like: 200,
          read: 200,
          sex: 0,
          age: 18,
          constellation: '处女座'
        }
      ],
      active: 0
    };
  },
  methods: {
    Active(idx) {
      this.active = idx;
    }
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
.discover {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.dHead {
  height: 1.2rem;
  background: #d84d38;
  position: relative;
}
.dHead nav {
  height: 1.2rem;
  text-align: center;
}
.dHead nav li {
  display: inline-block;
  height: 1.2rem;
  line-height: 1.2rem;
  margin-right: -0.04rem;
  padding: 0 0.44rem;
  border-bottom: 0.133333rem solid #d84d38;
  text-align: center;
  font-size: 0.453333rem;
  color: #010005;
}
.dHead nav .active {
  color: #f9ffff;
  border-bottom: 0.133333rem solid #fff;
}
.dHead .add {
  position: absolute;
  font-size: 0.613333rem;
  color: #fefbff;
  width: 0.613333rem;
  height: 0.306667rem;
  right: 0.6rem;
  top: 0.32rem;
}
.dMain {
  flex: 1;
  overflow: auto;
  background: #dbdbdb;
}
.dMain > nav > li {
  /* min_height: 5.2rem; */
  padding-top: 0.133333rem;
  padding-left: 0.333333rem;
  background: #f6f5f1;
  margin-bottom: 0.133333rem;
}
.dMain > nav > li .dTop {
  height: 1.466667rem;
  display: flex;
}
.dMain > nav > li .dTop .dImg {
  width: 1.466667rem;
  height: 1.466667rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.293333rem;
}
.dMain > nav > li .dTop .dImg img {
  width: 100%;
  height: 100%;
}
.dInfo {
  display: flex;
  flex-direction: column;
  width: 5.333333rem;
  justify-content: space-around;
}
.dInfo nav li {
  float: left;
  height: 0.466667rem;
  padding: 0 0.066667rem;
  background: #f17431;
  margin-right: 0.093333rem;
  color: #fcf5fd;
  font-size: 0.293333rem;
  line-height: 0.466667rem;
}
.dInfo nav li em {
  font-style: normal;
}
.dInfo nav li i {
  font-size: 0.266667rem;
}
.dMain .dTop {
  margin-bottom: 0.266667rem;
}
.dMain .dTop .dTime {
  flex: 1;
  text-align: right;
  padding-right: 0.6rem;
}
.dMain .dInner {
  padding-right: 0.56rem;
  margin-bottom: 0.266667rem;
}
.dMain .dInner img {
  width: 100%;
  height: 100%;
}
.dMain .dInner p {
  font-size: 0.32rem;
  margin-bottom: 0.266667rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.dMain .interaction {
  display: flex;
  padding-bottom: 0.266667rem;
  width: 100%;
}
.dMain .interaction div {
  flex: 1;
}
.dMain .interaction .watch {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dMain .interaction .watch .watch-top span {
  margin-right: 0.133333rem;
  color: #9c9b97;
}
.dMain .interaction .watch .watch-bottom span:nth-child(1) {
  font-size: 0.533333rem;
  color: #9c9b97;
  margin-right: 0.453333rem;
  vertical-align: middle;
}
.dMain .interaction .watch .watch-bottom span:nth-child(2) {
  font-size: 0.346667rem;
  color: #9c9b97;
  margin-right: 0.453333rem;
  vertical-align: middle;
}
.dMain .interaction .more {
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.48rem;
  padding-right: 0.56rem;
  color: #b4b4b4;
}
</style>

