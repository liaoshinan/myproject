<template>
	<div class="myRecommend" v-cloak v-if="type[3].view">
	   <div class="content_">
        <Head></Head>
        <div class="blt1"></div>
       <div class="blt2">
            <span>推荐码链接:&nbsp;</span>
        <input type="text" placeholder="www.baidu.com/">
        <button>复制链接</button>
       </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'myRecommend',
  props : ['type'],
  data () {
    return {
      
    }
  }
}
</script>

<style scope lang="scss">
	.content_ {
  width: 926px;
  height: 598px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  box-shadow: 5px 0px 10px rgba(95, 98, 154, 0.1);
  .blt1 {
    width: 100%;
    height: 60px;
  }
  .blt2 {
    span {
      font-size: 18px;
      font-family: PingFang-SC-Regular;
      color: rgba(95, 95, 146, 1);
      line-height: 40px;
      vertical-align: middle;
    }
    input {
      width: 370px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid rgba(95, 95, 146, 1);
      margin-right: 10px;
      padding: 0 10px 0;
    }
    input::-webkit-input-placeholder {
      color:rgba(191,191,209,1);
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */

      color:rgba(191,191,209,1);
    }

    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */

     color:rgba(191,191,209,1);
    }

    input:-ms-input-placeholder {
      /* Internet Explorer 10+ */

     color:rgba(191,191,209,1);
    }
    button {
      width: 120px;
      height: 40px;
      background: rgba(138, 133, 245, 1);
      border-radius: 4px;
      border: none;
      font-size: 18px;
      font-family: PingFang-SC-Regular;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
      vertical-align: bottom;
      cursor: pointer;
    }
  }
}
</style>

