<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 6宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <router-link to="./home/newslist">
            <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo: function() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
          // console.log(res.body);
          if (res.body.status === 0) {
            this.lunboList = res.body.message;
          } else {
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
body {
    background-color: #fff ;
}
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
    border: 0;
    background-color: #fff;
    li {
        border: 0;
        img {
            width: 60px;
            height: 60px;
        }
    }
}
</style>
