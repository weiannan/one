<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link :to="'/home/newslist/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3>{{ item.title }}</h3>
            <p class="mui-ellipsis">
              <span>{{ item.add_time }}</span>
              <span>浏览次数：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
        newList: []
    };
  },
  created(){
      this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(res =>{
        //   console.log(res)
          if(res.status === 200){
            this.newList = res.body.message
          }else{
              Toast("获取列表失败")
          };
      });
    }
  }
};
</script>

<style>
.mui-media-body,
.mui-media-body h3 {
  font-size: 12px;
}
.mui-ellipsis {
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>
