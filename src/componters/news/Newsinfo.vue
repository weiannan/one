<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataa("YYYY-MM-DD HH:mm:ss") }}</span>
      <span>点击：{{ newsinfo.click }} 次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../subcomponters/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: []
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        if (res.status == 200) {
          this.newsinfo = res.body.message[0];
          console.log(this.newsinfo);
        } else {
          Toast("获取新闻失败！");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
