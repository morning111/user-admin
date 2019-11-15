<template>
  <div>
    <div class="common-header">
      <div class="common-header-content">
        <div class="common-header-link" @click="handleLinkClick">进入classin</div>
      </div>
    </div>
    <!-- header结束 -->
    <div class="pages-content clearfix">
      <!-- 侧边导航开始 -->
      <div class="common-left-nav">
        <el-col :span="24">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#F8FDFB"
            text-color="#4D4D4D"
            active-text-color="#30BA78"
            @select="handleSelect">
            <el-menu-item index="1">
              <span slot="title">1.用户投诉举报</span>
            </el-menu-item>
            <el-menu-item index="2" >
              <span slot="title">2.用户服务协议备案</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <span slot="title">3.培训人员信息公示</span>
            </el-menu-item>
            <el-menu-item index="4" >
              <span slot="title">4.收费项目标准及退费办法</span>
            </el-menu-item>
            <el-menu-item index="5" >
              <span slot="title">5.课程用户投诉举报链接</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
    <!-- 侧边导航结束 -->

    <!-- 右侧部分开始 -->
    <div class="common-right-content">
      <!-- <router-view></router-view> -->
      <div class="right-content" >
        <!-- 用户投诉举报 -->
        <UserComplaint v-show="activeIndex == 1"></UserComplaint>
        <!-- 用户服务协议备案 -->
        <UserAgreement v-show="activeIndex == 2"></UserAgreement>
        <!-- 培训人员信息公示 -->
        <TrainerInfo v-show="activeIndex == 3"></TrainerInfo>
        <!-- 收费项目标准及退费方法 -->
        <ChargeRefund v-show="activeIndex == 4"></ChargeRefund>
        <!-- 课程用户投诉举报链接 -->
        <CourseComplaint v-show="activeIndex == 5"></CourseComplaint>
      </div>
    </div>
    <!-- 右侧部分结束 -->
    </div>
    
  </div>
</template>
<script>
import UserComplaint from '../components/user-complaint.vue'
import UserAgreement from '../components/user-agreement.vue'
import TrainerInfo from '../components/trainer-info.vue'
import ChargeRefund from '../components/charge-refund.vue'
import CourseComplaint from '../components/course-complaint.vue'
export default {
  name:'index',
  components: {
    UserComplaint,
    UserAgreement,
    TrainerInfo,
    ChargeRefund,
    CourseComplaint
  },
  data () {
    return{
      link:'http://www.ydtkt.com',//跳转到外部链接
      activeIndex: '1',
    }
  },
  methods:{
  //   // 跳转到外部链接
    handleLinkClick() {
      window.location.href=this.link;
    },
  //  // 左侧导航点击事件
  //   handleMenuClick(path) {
  //     this.$router.replace(path)
  //   }
    handleSelect(key,keyPath) {
      this.activeIndex = key;
    }
  }
}
</script>
<style scoped lang="less">
  .common-header{
    width:100%;
    height: 51px;
    line-height: 51px;
    background: #4A4B50;
  }
  .common-header-content{
    width: 1200px;
    margin:0 auto;
  }
  .common-header-link{
    display: inline-block;
    width:248px;
    height:51px;
    font-size:18px;
    font-weight:bold;
    color:#fff;
    text-align: center;
    background:#30BA78;
    box-shadow:0px 0px 13px 0px #349F6C;
  }
  .pages-content{
    width:1200px;
    margin:0 auto;
  }
  .common-left-nav{
    width:248px;
    height:274px;
    margin-top:13px;
    float: left;
  }
  .el-menu-item.is-active{
    position: relative;
  }
  .el-menu-item.is-active::after{
    content:'';
    position: absolute;
    top:35%;
    left:0;
    width:3px;
    height:15px;
    background:#30BA78;
  }
  .el-menu-item.is-active:hover, .el-menu-item:hover {
   background-color: #F8FDFB !important;
   color:#30BA78;
  }
  .el-menu-item{
    padding:0 22px;
    font-size:16px;
    line-height: 46px;
    color:#4D4D4D;
  }
  .el-menu-item, .el-submenu__title{
    height: 46px;
    line-height: 46px;
  }
  .el-menu{
    border-right:none;
    padding:17px 0 26px;
  }
  .common-right-content{
    width:891px;
    margin:37px 0 0 61px;
    float: right;
  }
</style>
