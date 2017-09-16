<template>
<div class="wrap">
	
	 <mu-row class='paper-row'>
      <mu-col class='paper-elem' width="50" tablet="25" desktop="20" v-for="subject in data" :key="subject.album.id">
        <router-link :to="{name: 'MusicSubject', params:{id: subject.album.id}}">
          <mu-paper>
            <div class='paper-border'>
              <div class='paper-img' :style="'background-image: url('+subject.album.picUrl+')'">
              </div>
            </div>
            <div class='paper-text'>
              <p>{{subject.album.name}}</p>
              <p class="star-box">
               <span class='paper-rating'>歌手：{{subject.artists[0].name}} </span>
              </p>
            </div>
          </mu-paper>
        </router-link>
      </mu-col>
    </mu-row>
</div>
</template>

<script>
	import axios from 'axios'
	export default{
		
		data(){
			return{
				data:[]
			}
		},
		mounted() {
      this.loadData();
    },
	methods:{
		loadData(){
            this.$axios.get(API_PROXY+'http://music.163.com/api/playlist/detail?id=3779629')
                .then((response) => {
                    // success
                     this.data = response.data.result.tracks
                    
//                  return this.data
                })
                .catch((error) => {
                    //error
                    console.log(error);
                })
 		 }
	}
	}
</script>

<style>
	.wrap{
  padding: 6px;
}
.wrap>.paper-row{
  justify-content: flex-start;
  flex-flow: row wrap;
}
.paper-elem{
  padding: 6px;
}
.paper-border{
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.paper-img{
  position: relative;
  width: 100%;
  padding-top:141%;
  background-size: cover;
  -moz-background-size: cover;
}
.paper-img-wrap{
  top:0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 2px 2px 0px 0px;
  box-sizing: border-box;
}
.paper-img-wrap>img{
  width: 100%;
}
.paper-text{
  padding: 6px 0 2px 0;
}
.paper-text>p{
  margin: 0;
  padding: 0 6px;
  font-size: 14px;
  height: 18px;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.star-icon{
  font-size: 14px;
  margin-right: -4px;
  float: left;
}
.star-box{
  display: flex;
  color: #ff6f00;
}
.star{
  letter-spacing: -3px;
}
.paper-star{
  margin-right: 3px;
  /*font-size: 12px;*/
}
.paper-rating{
  position: relative;
  /*top: -2px;*/
}
</style>