<template>
<div>
	
  <mu-tabs  :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="口碑榜"/>
    <mu-tab value="tab2" title="正在热映"/>
    <mu-tab value="tab3" title="准备上线"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
  	<card></card>
  </div>
  <div v-if="activeTab === 'tab2'">
  	<inTheaters></inTheaters>
   
  </div>
  <div v-if="activeTab === 'tab3'">
    <coming></coming>
    
  </div>
</div>

</template>

<script>
	import card from './card.vue'
	import inTheaters from './inTheater.vue'
	import coming from './coming.vue'
export default {
  data () {
    return {
      activeTab: 'tab1',
      scroll:' '
    }
  },
  components:{
  	card,
  	inTheaters,
  	coming
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    flex(){    
    	this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    	if(this.scroll>30){
    		document.getElementsByClassName('mu-tabs')[0].style.position='fixed'
    	}else{
    		document.getElementsByClassName('mu-tabs')[0].style.position='relative'
    	}
    }
    },
    created(){
    	window.addEventListener('scroll',this.flex)
    }
  }

</script>

<style>
	.wrap{
		margin-bottom: 4em;
	}
</style>