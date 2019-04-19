<template>
  <div class="chat">
    <header>
      <span v-for="(a,index) in pip" :class="{bod:index===active}" @click="match(index)">{{a.name}}</span>
    </header>
    <div class="goodlist">
      <ul>
        <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
          <li>
          <img src="../assets/img/head.jpg" alt="">
          <div>
            <h2>小红</h2>
            <p>晚上几点有空<span>下午06:06</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
 
</template>
<script>
import base from '../base_tel.css'
export default {
  data() {
    return {
      pip: [{name: '聊天' }, {name: '匹配' }],
      active: 0
    }
  },
  methods: {
    match(index) {
      this.active = index
    }
  }
}
</script>
<style scoped>
.chat{
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
header {
  background: #d84d38;
  text-align: center;
  height: 1.186667rem;
}
header span {
  display: inline-block;
  height: 1.186667rem;
  font-size: 0.453333rem;
  color: #000000;
  text-align: center;
  padding: 0.4rem;
  border-bottom: 0.133333rem solid #d94c3a;
}
.bod {
  color: #fff;
  border-bottom: 0.133333rem solid #fff;
}
.goodlist{
  width: 100%;
  padding-left: 0.32rem;
  padding-right: 0.026667rem;
  overflow: auto;
  flex: 1;
  background: #F6F5F1;
}
.goodlist li{
  height: 1.746667rem;
  box-sizing: border-box;
  border-bottom: 0.026667rem solid #B1B1B3;
  padding-top: 0.133333rem;
  padding-bottom: 0.093333rem;
  padding-right: 0.306667rem;
  display: flex;
}
.goodlist li img{
  border-radius: 50%;
  width: 1.48rem;
  height: 1.48rem;
  float: left;
}
.goodlist li div{
  padding-left: 0.293333rem;
  float: left;
  flex: 1;
}
.goodlist li h2{
  font-size: 0.373333rem;
  margin-top: 0.173333rem;
  line-height: 0.64rem;
}
.goodlist li p{
  font-size: 0.346667rem;
}
.goodlist li p span{
  float:right;
  font-size: 0.24rem;
  padding-top: 0.186667rem;
}
</style>