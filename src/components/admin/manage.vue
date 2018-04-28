<template>
<div class="manage" v-cloak>
    <div class="w-header">
    	<div class="w-head">
    		<img src="../../assets/wanlin/images/wl_logo.png" class="fl"/>
    		<span class="fr">已有账号？<em>去登入</em></span>
    	</div>
    </div>
    <div class="w-mian">
    	<div class="w-mian-l fl">
    		<ul>
    			<li v-for="item in pageData"  :class="[item.classes,item.activeClass]" v-on:click="goPage(item.pageName,item.componentName)">
    				<span>{{item.pageName}}</span>
    				<div class="fr imgBox"></div>
    			</li>
    		</ul>
    	</div>
    	<div class="w-mian-r fl">
    		<div class="w-mian-title">
    			<span class="t_1">个人中心</span>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;<span class="t_2">{{currentPage}}</span>
    		</div>
    		<div class="w-mian-body">
    			<!--放组件容器-->
				<userCenter :type="pageData"></userCenter>
    			<myWallet :type="pageData"></myWallet>
    			<myTransaction :type="pageData"></myTransaction>
    			<myRecommend :type="pageData"></myRecommend>
    			<myProfit :type="pageData"></myProfit>
    			<safeCenter :type="pageData"></safeCenter>
    		</div>
    	</div>
    </div>
</div>
</template>

<script>
import userCenter from './userCenter';
import myWallet from './myWallet';
import myTransaction from './myTransaction';
import myRecommend from './myRecommend';
import myProfit from './myProfit';
import safeCenter from './safeCenter';

export default {
  name: 'manage',
  components : {
       userCenter,
       myWallet,
       myTransaction,
       myRecommend,
       myProfit,
       safeCenter
  },
  data () {
    return {
      currentPage:'用户中心',
      pageData:[{
	      	classes:"bg1",
	      	activeClass:"active",
	      	pageName:'用户中心',
	      	componentName:'userCenter',
	      	view:true,
	      },{
	      	classes:"bg2",
	      	activeClass:"",
	      	pageName:'我的钱包',
	      	componentName:'myWallet',
	      	view:false,
	      },{
	      	classes:"bg3",
	      	activeClass:"",
	      	pageName:'交易所绑定',
	      	componentName:'myTransaction',
	      	view:false,
	      },{
	      	classes:"bg4",
	      	activeClass:"",
	      	pageName:'推荐码链接',
	      	componentName:'myRecommend',
	      	view:false,
	      },{
	      	classes:"bg5",
	      	activeClass:"",
	      	pageName:'推荐人收益',
	      	componentName:'myProfit',
	      	view:false,
	      },{
	      	classes:"bg6",
	      	activeClass:"",
	      	pageName:'安全中心',
	      	componentName:'safeCenter',
	      	view:false,
	      }
      ],

    }
    
  },
   created () {
   	
   },
   methods : {
		goPage(pageName,componentName){
			this.currentPage = pageName;
			for(var i = 0 ;i<this.pageData.length;i++){
				//导航栏切换
				if(this.currentPage==this.pageData[i].pageName){
					this.pageData[i].activeClass ="active";
				}else{
					this.pageData[i].activeClass ="";
				}
				//内容切换
				if(componentName==this.pageData[i].componentName){
					this.pageData[i].view =true;
				}else{
					this.pageData[i].view =false;
				}
			}
		}
   }
   
}
</script>

<style scope lang="scss">
	.bg1{
		background:url('../../assets/wanlin/images/z_icon1.png') 10px 19px no-repeat;
	}
	.bg2{
		background:url('../../assets/wanlin/images/z_icon3.png') 5px 21px no-repeat;
	}
	.bg3{
		background:url('../../assets/wanlin/images/z_icon8.png') 5px 13px no-repeat;
	}
	.bg4{
		background:url('../../assets/wanlin/images/z_icon9.png') 5px 23px no-repeat;
	}
	.bg5{
		background:url('../../assets/wanlin/images/z_icon10.png') 8px 17px no-repeat;
	}
	.bg6{
		background:url('../../assets/wanlin/images/z_icon11.png') 6px 16px no-repeat;
	}
	.active.bg1{
		background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon6.png') 10px 19px no-repeat !important;
	}
	.active.bg2{
		background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon5.png') 5px 21px no-repeat !important;
	}
	.active.bg3{
		background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon13.png') 5px 17px no-repeat !important;
	}
	.active.bg4{
		background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon12.png') 5px 23px no-repeat !important;
	}
	.active.bg5{
		background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon14.png') 5px 17px no-repeat !important;
	}
	.active.bg6{
		background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon7.png') 6px 16px no-repeat !important;
	}
    .manage{
    	width:100%;
    	.w-header{
    		width:100%;
    		background:#0C0C36;
    		box-sizing: border-box;
    		.w-head{
    			margin:0 auto;
    			width:1200px;
    			height:100px;
    			img{
    				width:142px;
    				height:auto;
    				margin:30px 0 0 38px;
    			}
    			span{
    				vertical-align: middle;
    				font-size:20px;
    				line-height:100px;
    				color:#fff;
    				em{
    					color:#908BFF;
    					cursor: pointer;
    				}
    			}
    		}
    	}
    	.w-mian{
    		width:1200px;
    		margin:0 auto;
    		padding-top:46px;
    		.w-mian-l{
    			width:171px;
    			height:748px;
    			background:#0C0C36;
    			color:#5F5F92;
    			padding:0 12px;
    			overflow-y:auto;
    			ul{
    				width:100%;
    				padding-top:7px;
    				li:hover .imgBox{
    					background:url('../../assets/wanlin/images/z_icon4.png') right 20px no-repeat;
    				}
    				li.bg1:hover{
    				    background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon6.png') 8px 18px no-repeat !important;
    					color:#fff;
    				}
    				li.bg2:hover{
    					background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon5.png') 5px 21px no-repeat !important;
    					color:#fff;
    				}
    				li.bg3:hover{
    					background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon13.png') 5px 17px no-repeat !important;
    					color:#fff;
    				}
    				li.bg4:hover{
    					background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon12.png') 5px 23px no-repeat !important;
    					color:#fff;
    				}
    				li.bg5:hover{
    					background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon14.png') 8px 17px no-repeat;
    					color:#fff;
    				}
    				li.bg6:hover{
    					background:linear-gradient(left, RGBA(49, 57, 92, 0.5) 0%, RGBA(95, 95, 146, 0.5)  50% ,RGBA(92, 100, 143, 0.5) 100%,), url('../../assets/wanlin/images/z_icon7.png') 6px 16px no-repeat !important;
    					color:#fff;
    				}
    				li.active{
    					color:#fff;
    					.imgBox{
	    					background:url('../../assets/wanlin/images/z_icon4.png') right 20px no-repeat;
	    				}
    				}
    				li{
    					padding:0px 20px 0px 30px;
    					height:55px;
    					line-height:55px;
    					text-align: left;
    					cursor: pointer;
    					span{
    						font-size:18px;
    						display: inline-block;
    					}
    					.imgBox{
    						width:30px;
    						height:55px;
    						background:url('../../assets/wanlin/images/z_icon2.png') right 20px no-repeat;
    					}
    					
    				}
    			}
    		}
    		.w-mian-r{
    			width:966px;
    			height:748px;
    			background:#F8F9FA;
    			box-sizing: border-box;
    			padding:20px;
    			.w-mian-title{
    				width:100%;
    				height:90px;
					line-height:90px;
					box-shadow:5px 0px 10px rgba(95,98,154,0.1) ;
					background:rgba(255,255,255,1);
					border-radius: 2px;
					margin-bottom:20px;
					font-size:18px;
					text-align:left;
					padding-left:37px;
					box-sizing: border-box;
					.t_1{
						color:RGBA(95, 95, 146, 1);
					}
					.t_2{
						color:rgba(95,95,146,1);
					}
    			}
    			.w-mian-body{
    				width:100%;
    				height:598px;
    				box-shadow:5px 0px 10px rgba(95,98,154,0.1);
					background:rgba(255,255,255,1);
					border-radius: 2px;
    			}
    		}
    	}
    }
</style>

