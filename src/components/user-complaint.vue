
<template>
  <div>
    <!-- 课程用户投诉 -->
    <div class="course-complaint-title clearfix">
      <h3>用户投诉举报</h3>
    </div>
    <!-- content -->
    <div class="course-complaint-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="80px">
        <el-form-item label="" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入投诉内容"></el-input>
        </el-form-item>
        <div class="upload-picture clearfix"  ref="uploadElement" prop="file">
          <el-upload
            :action="imgUrlList"
            list-type="picture-card"
            name="imgUrl"
            :limit="2"
            ref="upload"
            :auto-upload="false"
            :on-success="handleUploadSuccess"
            :on-preview="handlePictureCardPreview"
            :before-upload="beforeupload"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <span class="add-picture">添加图片</span>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
       
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">投诉</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name:"complaint",
   data() {
    return {
      ruleForm: {
				desc: ''
			},
      dialogImageUrl: '',
      dialogVisible: false,
      imgUrl:'',
      imgUrlList:'',
      file:'',
      rules: {
        desc: [
          { required: true, message: '请填写投诉内容', trigger: 'blur' }
		],
		file:[
		  { required: true, message: '请上传图片', trigger: 'blur' }
		]
      },
    }
  },
  
  methods:{
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeupload (file) {
      console.log(file)
      this.formData.append('file', file)
      return false
    },
    handleUploadSuccess(res) {
      if (res.status == 200) {
        this.imgUrl = res.data.imgUrl;
      }
    },
    onSubmit(formName) {
      this.imgUrlList = 'https://jsonplaceholder.typicode.com/posts/'
      this.$refs[formName].validate((valid) => {
          if (valid) {
            
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }

  }
}
</script>

<style lang="less" scoped>
  .course-complaint-title{
    font-size:24px;
		font-weight:400;
		color:rgba(21,21,21,1);
		margin-bottom:43px;
  }
  .course-complaint-content{
    width:889px;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 13px 0px rgba(225,225,225,0.42);
		border-radius:4px;
  }
  .course-complaint-content /deep/.el-textarea .el-textarea__inner{
		width:846px;
		height: 103px;
		resize: none;
	}
	.course-complaint-content /deep/.el-form-item__content{
		margin-left:22px!important;
		margin-top:24px;
	}
	.course-complaint-content /deep/.el-upload--picture-card{
		width:47px;
		height:46px;
		line-height:46px;
		margin-left:22px;	
		border:1px dashed rgba(167,167,167,.5);
		border-radius:4px;
		background:rgba(252,252,252,1);
		float: left;
  }
  .el-upload--picture-card i{
		font-size:16px;
		color:#a7a7a7;
	}
	.add-picture{
		font-size:16px;
		font-weight:300;
		color:rgba(203,203,203,1);
		margin:15px 0 0 13px;
		position: relative;
		top:15px;
	}
	.el-button--primary{
		width:98px;
		height:40px;
		background:rgba(242,255,249,1);
		border:1px solid rgba(48,186,120,1);
		border-radius:4px;
		color:rgba(48,186,120,1);
		font-size:16px;
		float: right;
		margin:0 24px 29px 0;
	}
</style>