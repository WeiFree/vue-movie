<template>
	
<div id="warp" style="position: relative;height: 100%;overflow: hidden;" >
	<div class="title">
		<mu-icon-button class='icon-back' icon='arrow_back' slot="left"  @click='goBack()' />
		<h1>{{music[0].name}}--<small>{{music[0].ar[0].name}}</small></h1>
	</div>	
	<div class="bg"  :style="'background-image: url('+music[0].al.picUrl+')'"></div>
	 <div class="paper" :class="{'start':playing,'':!playing}"  :style="'background-image: url('+music[0].al.picUrl+')'">
	 	<span id="">
	 		
	 	</span>
	 </div>
	<div class="control">
		<div class="jindu">
				<span id="music-bar">
					<span id="load-bar"></span>
					<span id="played-bar"></span>
				</span>
				<div id="time">
					<span id="current-time">0:00</span>
					<span id="total-time">{{totalTime}}</span>
				</div>
			</div>
			<div class="controls">
				<a id="xunhuan" href="javascript:;">循环</a>
				<a id="play" @click="playMusic()" href="javascript:;">Play</a>
				<a id="jingyin" href="javascript:;">静音</a>
			</div>
	</div>
	<audio id="audio" autoplay="autoplay" controls="controls">
			<source :title="music.name" :data-img="music[0].al.picUrl" :src="musicUrl.data[0].url">
		</audio>
</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'play',
		data(){
			return{
				totalTime:0,
				playing:true,
				music:[],
				musicurl:[]
			}
		},
		mounted() {	
      this.loadData();
      this.loadUrl();
      this.playMusic()
    },
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			loadData(){
   		 this.$axios.get(API_PROXY+'http://musicapi.leanapp.cn/song/detail?ids='+this.$route.params.id)
                .then((response) => {
                    // success
                     this.music = response.data.songs
//                 	console.log(response.data.songs[0].al.picUrl)
                    return this.music
                })
                .catch((error) => {
                    //error
                    console.log(error);
                })
                this.$axios.get(API_PROXY+'http://musicapi.leanapp.cn/music/url?id='+this.$route.params.id)
                .then((response) => {
                    // success
                     this.musicUrl = response.data
                   	console.log(response.data.data[0].url)
                    return this.musicUrl
                })
                .catch((error) => {
                    //error
                    console.log(error);
                })
   	},
   	loadUrl(){
   		
   	},
   	playMusic(){
   		var  audio=document.getElementById("audio")
		this.totalTime=(audio.duration)/60;
   		if(this.playing){
   			audio.pause()
   			return this.playing=false,this.totalTime;
   		}else{
   			audio.play()
   		
   			console.log()
   			return this.playing=true,this.totalTime;
   		}
   	}
	}
}
</script>

<style>
	body,html{
		height: 100%;
	}
	#warp{
	 background: -webkit-linear-gradient(left, #7E898F 0%, #636C75 100%), -webkit-radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.55) 100%), -webkit-radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.08) 63%);
  background: linear-gradient(90deg, #7E898F 0%, #636C75 100%), radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.55) 100%), radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.08) 63%);
  background-blend-mode: multiply, screen; 
    color: white;
	}
	.title {
	height:6%;
	width: 100%;
	text-align: center;
	line-height: 100%;
	border-bottom: 1px solid #b7b7b7;
	position: relative;
	z-index: 99;
}
.title h1 {
	font-size: 7vw;
	font-weight: 100;
	color:#FFFFFF;
}
	.bg{
		
		margin: -18% auto;
		height: 85%;
		width: 100%;
		/*background-image: url(./sprite-sheet.png);*/
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: rgba(255,255,255,0.0);
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
        /*//模糊滤镜*/
	}
	.paper{
		background-color: white;
		/*background-image: url(./sprite-sheet.png);*/
		 background-repeat: no-repeat;
        background-position: center;
        background-size: cover; 
        width: 80%;
        height: 0;
        padding-top: 80%;
        border-radius: 50%;
		position: absolute;
		left: 48%;
		top: 45%;
		border: 5px solid rgba(255,255,255,0.7);
		margin-top: -37%;
		margin-left: -37%;
		animation-play-state:paused;
	}
	.paper:before{
		width: 20%;
		height: 20%;
		border-radius: 50%;
		background: -webkit-linear-gradient(left, #7E898F 0%, #636C75 100%), -webkit-radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.55) 100%), -webkit-radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.08) 63%);
		background: linear-gradient(90deg, #7E898F 0%, #636C75 100%), radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.55) 100%), radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.08) 63%);
 		background-blend-mode: multiply, screen; 
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -10%;
		margin-left: -10%;
		border: 5px solid rgba(255,255,255,0.4);
	}
	.icon-back{
		 position: absolute;
		 left: 2%;
		 top: 0;
		 width: 10%;
		 height: 8%;
		 z-index: 999;
     	 text-shadow: 0px 0px 3px #ddd;
	}
	.control{
		margin-top: 5px;
		height: 25%;
		width: 100%;
		/*box-shadow:-5px 8px 11px 4px  #000000;*/
		background-color: rgba(255,255,255,0);
	}
	.jindu {
	padding-top: 5px;
	height: 25px;
}
#music-bar {
	display: inline-block;
	width: 218px;
	height: 4px;
	background: #6d6d6d;
	margin-right: 7px;
	border-radius: 4px;
	margin-left: 5px;
	position: relative;
}
#voice-bar {
	display: inline-block;
	width: 80px;
	height: 4px;
	background: #6d6d6d;
	border-radius: 4px;
	position: relative;
}
#played-bar, #voiced-bar {
    display: inline-block;
    height: 4px;
    float: left;
    border-radius: 4px;
    background: -webkit-linear-gradient(left, #fec514, #EE4000);
    background: linear-gradient(left, #fec514, #EE4000);
    position: absolute;
    z-index: 2;
    transition: all 0.5s;
}
#played-bar:after, #voiced-bar:after {
	content: '';
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	right: -2px;
	top: -2px;
}
#load-bar {
	display: inline-block;
	height: 4px;
	float: left;
	border-radius: 4px;
	background: #a2a2a2;
	position: absolute;
	z-index: 1;
	transition: all 3s; /* 进度加载动画 */
}
#time {
    width: 216px;
	font-size: 12px;
    overflow: hidden;
    padding: 3px 0 0 6px;
}
#time span:nth-child(1) {
	float: left;
}
#time span:nth-child(2) {
	float: right;
}
.controls {
	padding-top: 20px;
	text-align: center;
}
.controls a {
	display: inline-block;
	color: #000;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	margin-right: 5px;
	border-radius: 50%;
	background: #fec514;
}
#play {
	font-size: 14px;
	transition: all 0.3s;
}
#play:hover {
	background: rgba(254,197,20,0.7);
}

#xunhuan, #jingyin {
	width: 30px;
	height: 16px;
	line-height: 16px;
	font-size: 12px;
	background: transparent;
	color: #fec514;
	margin: 0 20px;
}
@media only screen  and (max-width: 640px) {
	.controls {
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		text-align: center;
	}
	#music-bar {
		width: 70%;
		margin-left: 5%;
		margin-right: 5%;
	}
	#voice-bar {
		width: 15%;
	}
	#time {
		width: 70%;
		margin-left: 5%;
		margin-right: 5%;
		padding-left: 0;
	}
	.jindu {
		position: absolute;
	    bottom: 80px;
	    left: 0;
	    width: 100%;
	}
}
.start{
	animation:loadRotate 13s linear infinite;
	-webkit-animation:loadRotate 13s linear infinite;
}
@-webkit-keyframes loadRotate{
  from{
    -webkit-transform:rotateZ(0deg);
  }
  to{
    -webkit-transform:rotateZ(360deg);
  }
}
@keyframes loadRotate{
  from{
    transform:rotateZ(0deg);
  }
  to{
    transform:rotateZ(360deg);
  }
}

</style>