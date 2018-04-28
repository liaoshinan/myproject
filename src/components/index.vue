<template>
<div class="index">
    <div class="index-header">
        <div class="wangling-icon-box">
            <div class="wangling-icon"></div>
        </div>
        <div class="login-box1">
            <div class="login-box2">
                <div class="login">登录</div>
                <div class="register">注册</div>
            </div>
        </div>
    </div>
    <div class="banner-box">
        <img class="banner-img" src="../assets/wanlin/images/wanglingbanner.jpg">
    </div>
    <div class="main">
        <div class="first-block">
            <div class="introduce-box">
                <div class="title"><span class="legend"></span><span>产品介绍</span></div>
                <p class="text">万灵机器人旨在为广大币圈用户提供最专业的程序化 自动化的交易软件，让您用最少的精力完成更高频的套利交易，可自主控制代替用户优化交易表现。并且这是一项全自动服务，用户可以自主判断机器人交易，还可以选择手动关闭机器人，万灵机器人充分利用机器学习和人工智能将比特币与USDT之间的交易最大化。</p>
            </div>
            <div class="img-box">
                <img class="introduce-img" src="../assets/wanlin/images/photo_wanling.png">
            </div>
        </div>
        
        <div class="second-block">
            <div class="back-img-box">
                <img class="back-img" src="../assets/wanlin/images/photo_beijng1.png">
            </div>
            <div class="item">
                <div class="itemList">
                    <div class="itemList_M">
                    	<div class="itemList_M_t"></div>
                    	<div class="itemList_M_m">
                    		<h4>财富管理</h4>
                    		<div class="p1">
                    			交易智能服务与数据支持
                    			<div class="line"></div>
                    		</div>	
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_sjqd.png">数据驱动</h5>
                    		<p class="p2">我们提供高标准的投资管理服务，通过在量化对冲领域的专长，为各类机构投资者及高净值个人投资者带来满意的绝对收益</p>
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_ld.png">灵盾</h5>
                    		<p class="p2">通过认证面部识别+个人特征来确保用户是本人，防范第三方欺诈；信息采用机器学习自然语言处理和深度学习处理手段</p>
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_jqxx.png">机器学习</h5>
                    		<p class="p2">基于超大规模计算资源及高性能并行的计算平台，深度结合传统算法与Deep Leaming的绘合应用。</p>
                    	</div>
                    </div>
                </div>
                <div class="itemList">
                    <div class="itemList_M">
                    	<div class="itemList_M_t"></div>
                    	<div class="itemList_M_m">
                    		<h4>人工智能</h4>
                    		<div class="p1">
                    			商数据驱动知应用：W灵智能交易
                    			<div class="line"></div>
                    		</div>	
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_tl.png">推理</h5>
                    		<p class="p2">W灵机器人揭示数据和假设生成得见解，模式和关系。它链接分散得知识片段，并进行推理，分析，比较，归纳，总结和论证，以获得决策得深入见解和准确性</p>
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_xx.png">学习</h5>
                    		<p class="p2">通过机器学习，W灵机器人可以快速从大数据中提取关键信息，并像人类一样学习和认知。它还可以获得反馈，优化模型，并在交互过程中通过专家级数据整理与学习，并不断提高．</p>
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_jhzy.png">交互作用</h5>
                    		<p class="p2">使用自然语言理解，W灵机器人获得价格波动得定义，市场投机情绪和成交量信息，并以数据相关性得方式进行交互。  </p>
                    	</div>
                    </div>
                </div>
                <div class="itemList">
                    <div class="itemList_M">
                    	<div class="itemList_M_t"></div>
                    	<div class="itemList_M_m">
                    		<h4>提高交易收益率</h4>
                    		<div class="p1">
                    			自动化和半自动化服务
                    			<div class="line"></div>
                    		</div>	
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_ys.png">风险规避</h5>
                    		<p class="p2">风脸指标的实时计算，使得价值分析和评估更加准确；众多交易模式和策略选择的组台大大缩短了分析时间。直观和可视化的利润/损失图表一目了然地显示出投资回报和风险</p>
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_cc.png">储存安全</h5>
                    		<p class="p2">交易策略存储在本地，并受多种保护模式的保护独特的远程指标进一步增强了战略的安全性．</p>
                    		<h5><img class="item-icon" src="../assets/wanlin/images/icon_scjh.png">市场机会</h5>
                    		<p class="p2">交易过程由各种专业高质量指标和功能精确控制您可以轻松自动进行目动交易，同时全面了解全球市场上的套利机会．从而使套利交易变得如此简单。</p>
                    	</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="third-block">
            <div class="xitong">
              <div class="xt_content">
            <div class="xt_left">
                <div @mouseover="mouseOver(0)" class="lf_1"> 
                    <span class="sp1">震荡子系统</span>
                    <div :class="{active:isActive == 0}"></div>
                </div>
                <div @mouseover="mouseOver(1)" class="lf_1">
                    <span class="sp2">趋势子系统</span>
                    <div :class="{active:isActive == 1}"></div>
                </div>
                <div @mouseover="mouseOver(2)" class="lf_1">
                    <span class="sp3">大数据子系统</span>
                    <div :class="{active:isActive == 2}"></div>
                </div>
            </div>
            <div class="xt_right" :class="systembg">
                <div class="right_tx">
                    <h2>简介</h2>
                    <div class="tx_2" v-text="systemIntroduce"></div>
                    <button>了解更多</button>
                </div> 
            </div>
          </div>
          </div>
        </div>
        <div class="kline-block">
            <img src="../assets/wanlin/images/wanglingbanner.jpg">
        </div>
        <div class="fourth-block">
             <div class="content">
                            <div class="left">
                                <img src="../assets/wanlin/images/photo_chahua.png" alt="">
                            </div>
                            <div class="right">
                                一个由人工智能与数字专家团队优化的终极密码交易平台。<br>
                                W灵机器人是一个由人工智能与数字专家组成的团队，他们成功地将算法和他们的行业专长结合到了W灵机器人平台中。<br>
                                我们的团队使用先进的高科技算法分析基于认知智能技术的交易模式我们使客户能够高枕无优地扩大盈利机会智能的W灵机器人在动荡和高度投机的市场。我们很自豪能够将W灵机器人作为市场上最具创新性的智能交易平台。
                            </div>
             </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-title">合作伙伴</div>
        <div class="cooperation-box">
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/aex.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/ALPHA.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/BCEX.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/BJEX.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/bsj.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/BTC.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/btg.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/btsd.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/byw.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/CEX.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/COINEGG.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/cyzb.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/drzb.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/FC.png">
            </div>
            <div class="cooperation">
                <img class="cooperation-img" src="../assets/wanlin/images/hb.png">
            </div>
        </div>
        <div class="remarks">Copyright&copy;2018 wanling 深圳市无极云科技有限公司 版权所有 粤ICP备16666666号-1 粤公网安备 44030666666666号 | 客服电话 40066666666</div>
    </div>
</div>
</template>

<script>
// var dwidth = window.screen.width;
// var screen_ratio = dwidth/1920;
// document.getElementsByTagName('body')[0].style.zoom = screen_ratio;
export default {
  name: "index",
  data() {
    return {
      isActive: 2,
      systembg: "big-data",
      systemIntroduce:
        "在金融市场里，如果把散户看做是一个整体，那么长期来看，散户处于一个绝对亏损得状态。震荡行情中，散户得胜率是高于50%的，大部分散户并不..."
    };
  },
  methods: {
    mouseOver(itemNum) {
      this.isActive = itemNum;
      if (itemNum == 0) {
        this.systembg = "shock";
        this.systemIntroduce =
          "FTD震荡系统，是在趋势平缓期以及回调期，以更好得价位成本入场，月均交易2-5次，胜率较高，适应性很强。";
      } else if (itemNum == 1) {
        this.systembg = "trend";
        this.systemIntroduce =
          "TTM趋势系统是抓取趋势发展过程中得确定性较高得一级趋势，开仓条件严格，单个数字货币月均1-3次交易，出场较为迅速，十年平均胜率超过65%";
      } else {
        this.systembg = "big-data";
        this.systemIntroduce =
          "在金融市场里，如果把散户看做是一个整体，那么长期来看，散户处于一个绝对亏损得状态。震荡行情中，散户得胜率是高于50%的，大部分散户并不...";
      }
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.clearfix {
  overflow: hidden;
  zoom: 1;
}
.index {
  min-width: 1728px;
  .index-header {
    position: fixed;
    display: table;
    z-index: 100;
    top: 0;
    width: 100%;
    .wangling-icon-box {
    //   padding: 30px 0;
      display: table-cell;
      vertical-align: middle;
      .wangling-icon {
        display: inline-block;
        background: url("../assets/wanlin/images/logo.png");
        width: 141px;
        height: 38px;
        background-size: 100% 100%;
      }
    }
    .login-box1 {
      display: table-cell;
      .login-box2{
         display: inline-block;
         background:linear-gradient(left, #8010FF, #6202DA);
         padding:14px 0;
         .register,.login{
             display: inline-block;
             padding: 16px 20px;
             font-size:16px;
             font-family:PingFang-SC-Bold;
             color:rgba(255,255,255,1);
             cursor: pointer;
         }
         .login{
             border-right:1px solid rgba(205,176,238,1)
         }
      }
    }
  }
  .banner-box {
    position: relative;
    cursor: pointer;
    .banner-img {
      width: 100%;
      height: auto;
    }
  }
  .main {
    background-color: #0c0c36;
    .first-block {
      padding: 140px 0 320px 415px;
      display: table;
      .introduce-box,
      .img-box {
        display: table-cell;
        vertical-align: middle;
      }
      .introduce-box {
        .title {
          padding: 0 0 20px 0;
          text-align: left;
          font-size: 24px;
          font-family: PingFang-SC-Bold;
          color: rgba(144, 139, 255, 1);
          .legend {
            display: inline-block;
            vertical-align: middle;
            margin: 0 10px 0 0;
            width: 5px;
            height: 27px;
            background: #6302dd;
          }
        }
        .text {
          text-align: left;
          width: 387px;
          height: 220px;
          font-size: 16px;
          font-family: PingFang-SC-Regular;
          color: rgba(254, 254, 255, 1);
          line-height: 35px;
        }
      }
      .img-box {
        padding: 0 0 0 185px;
        .introduce-img {
          width: 80%;
          height: 80%;
        }
      }
    }
    .second-block {
      position: relative;
      width: 100%;
      height: auto;
      padding-bottom: 293px;
      .back-img-box {
        position: absolute;
        width: 90%;
        top: 70px;
        left: 50%;
        transform: translate(-50%, 0);
        .back-img {
          width: 100%;
          height: auto;
        }
      }
      .item {
        width: 1200px;
        height: auto;
        margin: 0 auto;
        display: table;
        .itemList {
          line-height: 18px;
          float: left;
          width: 399px;
          height: 592px;
          box-sizing: border-box;
          border-right: 1px solid transparent;
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
          border-image: -webkit-linear-gradient(
              #5757b3,
              #8950df,
              #383887,
              #3786cf,
              #000074,
              #0e0048
            )
            1 1;
          position: relative;
          .itemList_M:hover {
            cursor: pointer;
            transform: scale(1.3);
            z-index: 10;
          }
          .itemList_M:hover .itemList_M_m {
            background: linear-gradient(left, #88acff, #6750df);
            padding-top: 36px !important;
            color: #fff !important;
            color: RGBA(158, 176, 220, 1) !important;
          }
          .itemList_M:hover .itemList_M_t {
            height: 0;
          }
          .itemList_M:hover h4 {
            transform: scale(0.8);
            color: #fff !important;
          }
          .itemList_M:hover div.p1 {
            transform: scale(0.8);
            color: #fff !important;
          }
          .itemList_M:hover h5 {
            padding: 3px 0 !important;
            transform: scale(0.8);
            color: rgba(255, 255, 255, 1) !important;
            .item-icon {
              display: inline-block !important;
            }
          }
          .itemList_M:hover p.p2 {
            display: block !important;
            transform: scale(0.8);
          }
          .itemList_M:hover .line {
            width: 470px !important;
            height: 595px !important;
            top: 35px !important;
            background: linear-gradient(#21145b, #0c0c36) !important;
          }
          .itemList_M {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transition: All 0.5s ease-in-out;
            .itemList_M_t {
              width: 100%;
              height: 20px;
              background: linear-gradient(left, #8010ff, #6202da);
            }
            .itemList_M_m {
              width: 100%;
              height: 592px;
              background: linear-gradient(
                top,
                RGBA(56, 56, 135, 0.5),
                RGBA(14, 0, 72, 0.5)
              );
              box-sizing: border-box;
              padding-top: 56px;
              text-align: center;
              transition: all 0.5s ease-in-out;
              color: RGBA(101, 100, 159, 1);
              h4 {
                font-size: 30px;
                padding-bottom: 16px;
                font-weight: 100;
                transition: All 0.5s ease-in-out;
              }
              div.p1 {
                font-size: 20px;
                padding-bottom: 45px;
                position: relative;
                transition: All 0.5s ease-in-out;
              }
              .line {
                width: 292px;
                height: 1px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 33px;
                background: RGBA(101, 100, 159, 1);
                transition: All 0.5s ease-in-out;
              }
              h5 {
                font-size: 20px;
                font-weight: 100;
                padding: 34px 0;
                transition: All 0.5s ease-in-out;
                .item-icon {
                  display: none;
                  margin: 0 15px 0 0;
                  vertical-align: middle;
                }
              }
              p.p2 {
                display: none;
                width: 80%;
                margin: 0 auto 5px auto;
                text-align: left;
                font-size: 14px;
                font-family: PingFang-SC-Regular;
                color: rgba(158, 176, 220, 1);
                line-height: 30px;
                transition: All 0.5s ease-in-out;
              }
            }
          }
        }
      }
    }
    .third-block {
      padding: 0 0 141px 0;
      .xitong {
        height: 790px;
        background: #0b0b36;
        position: relative;
      }
      .xt_left {
        top: 49%;
        width: 658px;
        height: 635px;
        background: RGBA(7, 7, 52, 0.6);
        float: left;
        position: absolute;
        top: 50%;
        bottom: 50%;
        margin: auto;
      }
      .xt_right {
        float: right;
        width: 1244px;
        height: 790px;
        float: right;
        &.big-data {
          background: url(../assets/wanlin/images/wanglingbeijing_04.png);
        }
        &.trend {
          background: url(../assets/wanlin/images/qushi_bg.png);
        }
        &.shock {
          background: url(../assets/wanlin/images/zhengdang_bg.png);
        }
      }
      .lf_1 {
        width: 100%;
        height: 209px;
        position: relative;
        cursor: pointer;
      }
      .lf_1 span {
        width: 182px;
        float: left;
        font-size: 30px;
        font-family: PingFang-SC-Medium;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
        display: inline-block;
      }
      .active {
        width: 107px;
        height: 10px;
        background: rgba(144, 139, 255, 1);
        position: absolute;
        bottom: 30px;
        right: 74px;
      }
      .sp1 {
        position: absolute;
        right: 0;
        bottom: 50px;
      }
      .sp2 {
        position: absolute;
        right: 0;
        bottom: 50px;
      }
      .sp3 {
        position: absolute;
        right: 0;
        bottom: 50px;
      }
      .right_tx {
        text-align: left;
        width: 1000px;
        height: 400px;
        margin-top: 200px;
        float: right;
      }
      .right_tx h2 {
        color: RGBA(255, 255, 255, 1);
        font-weight: normal;
        margin-bottom: 40px;
      }
      .right_tx .tx_2 {
        width: 521px;
        height: 200px;
        color: RGBA(255, 255, 255, 1);
        font-size: 16px;
        overflow-y: auto;
        line-height: 30px;
      }
      .right_tx button {
        width: 160px;
        height: 44px;
        background: #7c1ffb;
        font-size: 20px;
        border: none;
        color: RGBA(255, 255, 255, 1);
        cursor: pointer;
      }
    }
    .kline-block {
      width: 1728px;
      height: 778px;
      margin: 0 auto;
      padding: 0 0 277px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .fourth-block {
      .content {
        display: table;
        padding: 0 0 144px 0;
        .left {
          display: table-cell;
          vertical-align: middle;
          width: 307px;
          height: 196px;
          padding-left: 457px;
        }
        .right {
          text-align: left;
          width: 387px;
          height: 196px;
          font-size: 16px;
          font-family: PingFang-SC-Regular;
          line-height: 40px;
          display: table-cell;
          vertical-align: middle;
          padding-left: 140px;
          color: rgba(254, 254, 255, 1);
        }
      }
    }
  }
  .footer {
    background: rgba(255, 255, 255, 1);
    .footer-title {
      padding: 98px 0 80px 0;
      font-size: 30px;
      text-align: center;
      font-family: PingFang-SC-Bold;
      color: rgba(95, 95, 146, 1);
      line-height: 40px;
    }
    .cooperation-box {
      width: 1060px;
      margin: 0 auto;
      text-align: left;
      .cooperation {
        display: inline-block;
        margin: 0 0 40px 0;
        height: 50px;
        width: 171px;
        text-align: center;
        .cooperation-img {
          vertical-align: middle;
          width: auto;
          height: auto;
        }
      }
    }
    .remarks {
      margin: 80px 0 0 0;
      font-size: 14px;
      font-family: PingFang-SC-Regular;
      color: rgba(95, 95, 146, 1);
      line-height: 48px;
    }
  }
}
</style>

