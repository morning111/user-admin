<template>
  <div>
    <!-- 培训人员信息公示 -->
    <div class="trainer-info-title clearfix">
      <h3>培训人员信息公示</h3>
    </div>
    <div class="user-complaint-content clearfix">
      <div class="user-complaint-box" v-for="item in list" :key="item.id">
        <span class="user-complaint-title">{{item.title}}</span>
        <ul class="user-complaint-list">
          <li class="user-complaint-lis" v-for="item1 in item.teacherList" :key="item1.id">
            <div class="user-complaint-img">
              <img :src="item1.img" alt="">
            </div>
            <div class="user-complaint-lis-right">
              <h5 class="user-complaint-name">{{item1.name}}</h5>
              <p class="user-complaint-introduce">{{item1.introduce}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'trainer',
  data() {
    return {
      list:[]
    }
  },
  methods:{
    handleTeachersList() {
      axios.get("/api/static/list.json")
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc(res) {
      if (res.data) {
        res.data.data && (this.list = res.data.data.list ) 
      } else {
        this.handleGetListErr()
      }
    },
    handleGetListErr(res) {
      console.log(res)
    }
  },
  created () {
    this.handleTeachersList()
  }
}
</script>

<style lang="less" scoped>
  .trainer-info-title{
    font-size:24px;
		font-weight:400;
		color:rgba(21,21,21,1);
		margin-bottom:39px;
  }
  .user-complaint-content{
    width:891px;
  }
  .user-complaint-box{
    display: flex;
    margin-bottom:37px;
  }
  .user-complaint-title{
    font-size:18px;
    color:#30BA78;
    margin-right:26px;
  }
  .user-complaint-list{
    flex: 1;
  }
  .user-complaint-lis{
    width:100%;
    display: flex;
    margin-bottom:18px; 
  }
  .user-complaint-img{
    width:105px;
    height:105px;
    margin-right:29px;
    img{
      width:100%;
      height: 100%;
    }
  }
  .user-complaint-lis-right{
    flex: 1;
  }
  .user-complaint-name, .user-complaint-introduce{
    font-size:16px;
    color:#333;
    line-height: 30px;
  }
  .user-complaint-introduce{
    line-height: 24px;
  }
</style>