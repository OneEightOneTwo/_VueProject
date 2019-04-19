<template>
    <div class="btt">
        <nav>
            <li v-for="(ic,idx) in icons" :class="{active:idx===active}" @click="Active(idx)">
                <a   :class="ic.class">
                    <!-- <i class="iconfont icon icon-tantan"></i> -->
                </a>
            </li>
           
            <!-- <li><a href="javascript:;" :class="iconfont, icon-liaotian, icon"></a></li>
            <li><a href="javascript:;" :class="iconfont, icon-dingwei, icon"></a></li>
            <li><a href="javascript:;" :class="iconfont, icon-wode, icon"></a></li> -->
        </nav>
    </div>
</template>
<script>
import base from '../base_tel.css'
import icon from '../assets/font_c8tqywfudtn/iconfont.css'
export default {
  data() {
    return {
      icons: [
        {
          class: 'iconfont icon icon-tantan',
          name: "tantan"
        },
        {
          class: 'iconfont icon icon-liaotian',
           name: "chat"
        },
        {
          class: 'iconfont icon icon-dingwei',
           name: "discover"
        },
        {
          class: 'iconfont icon icon-wode',
           name: "userinfo"
        }
      ],
      active: 0
    }
  },
  methods: {
    Active(idx) {
      this.active = idx
        let name = this.icons[idx].name
      // 跳路由
      this.$router.push({ name })
    }
  }
}
</script>
<style scoped>
.btt{
  height: 1.28rem;
}
nav {
  height: 1.28rem;
  background: #be3a2d;
  display: flex;
  justify-content: space-around;
}
nav li {
  list-style: none;
  width: 0.933333rem;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
nav li a {
  color: #fefeff;
  text-decoration: none;
}
nav li a:hover {
  text-decoration: none;
}

.icon {
  font-size: 0.8rem;

  color: #fefefe;
}

.active a {
  color: #e96e33;
}
</style>