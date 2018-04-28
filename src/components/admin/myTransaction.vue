<template>
	<div class="myTransaction" v-cloak v-if="type[2].view">
	    <div class="suoy">
  <div class="suoy_sec">
    <span>交易所:</span>
     <el-select v-model="value" placeholder="请选择" class="ab">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="public">
   <span> 公钥: <input type="text"></span>
    <span> 密钥: <input type="text"></span>
    <div class="btn_t">
        <button id="submit">提交</button>
        <button id="btn">取消</button>
    </div>
  </div>
  </div>
	</div>
</template>

<script>
export default {
  name: 'myTransaction',
  props : ['type'],
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
}
</script>

<style scope lang="scss">
	.suoy {
  width: 926px;
  height: 598px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  box-shadow: 5px 0px 10px rgba(95, 98, 154, 0.1);
  .suoy_sec {
    width: 300px;
    span {
      width: 54px;
      height: 16px;
      font-size: 16px;
      font-family: PingFang-SC-Regular;
      color: rgba(95, 95, 146, 1);
      line-height: 40px;
      margin-right: 16px;
    }
    .ab {
      width: 140px;
      height: 40px;
    }
  }
  .public {
    width: 100%;

    padding-top: 100px;
    span {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      font-size: 16px;
      font-family: PingFang-SC-Regular;
      color: rgba(95, 95, 146, 1);
      input {
        width: 330px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid rgba(95, 95, 146, 1);;
        padding: 0 10px 0;
      }
    }
    .btn_t {
      width: 385px;
      margin: auto;
      margin-top: 40px;
      button {
        cursor: pointer;
        width: 150px;
        height: 40px;
       background-color: rgba(138, 133, 245, 1);
        border-radius: 5px;
        border: none;
        font-size: 18px;
        font-family: PingFang-SC-Bold;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
      }
      button:hover{
            background-color:rgba(255,250,250,1);
            border:1px solid rgba(95,95,146,1);
            color: rgba(95,95,146,1);
      }
      #submit {
        margin-left: 30px;
      }
      #btn {
        margin-left: 50px;
      }
    }
  }
}
</style>

