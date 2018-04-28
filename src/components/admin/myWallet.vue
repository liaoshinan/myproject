<template>
	<div class="myWallet" v-cloak v-if="type[1].view">
	    我的钱包
	</div>
</template>

<script>
export default {
  name: 'myWallet',
  props : ['type'],
  data () {
    return {
      
    }
  }
}
</script>

<style scope lang="scss">
	
</style>

