<template>
  <div class="hello">
  	<router-view></router-view>
    <mu-paper style="width: 100%; position: fixed;bottom: 0;">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item to='test' value="movies" title="Movies" icon="ondemand_video"/>
      <mu-bottom-nav-item to='music' value="music" title="Music" icon="music_note"/>
      <mu-bottom-nav-item value="books" title="Books" icon="books"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
  </div>
  
</template>

<script>
	import test from './test.vue'
export default {
  name: 'hello',
 data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
