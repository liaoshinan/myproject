<template>
	<div class="userCenter" v-cloak v-if="type[0].view">
	    用户中心
	</div>
</template>

<script>
export default {
  name: 'userCenter',
  props : ['type'],
  data () {
    return {
      
    }
  }
}
</script>

<style scope lang="scss">
	
</style>

