<template>
	<div style="position: relative">
    <mu-icon-button class='icon-back' icon='arrow_back' slot="left" @click='goBack()' />
    <div class="image-wrap" :style="'background-image: url('+movie.images.large+')'">
    </div>
    <div class="title-border">
      <div class="title-info">
        <div class="title-image">
          <img :src='movie.images.large' />
        </div>
        <div class="title-text">
          <p>{{movie.title}}</p>
          <p>{{movie.rating.average}}</p>
        </div>
      </div>
    </div>
 <div class="star">
      <Star :rating="movie.rating.average"></Star>
    </div>

    <div class="info">
      <p class="info-content"><span class="info-title">原名:</span><span class="info-text">{{movie.original_title}}</span></p>
      <p class="info-content"><span class="info-title">类型:</span><span class="info-text">{{movie.genres}}</span></p>
      <p class="info-content"><span class="info-title">年代:</span><span class="info-text">{{movie.year}}</span></p>
      <p class="info-content"><span class="info-title">地区:</span><span class="info-text">{{movie.countries}}</span></p>
      <p class="info-content"><span class="info-title">又名:</span><span class="info-text">{{movie.aka}}</span></p>
      <p class="info-content"><span class="info-title">想看人数:</span><span class="info-text">{{movie.wish_count}}</span></p>
      <p class="info-content"><span class="info-title">看过人数:</span><span class="info-text">{{movie.collect_count}}</span></p>
      <p class="info-content"><span class="info-title">评分人数:</span><span class="info-text">{{movie.ratings_count}}</span></p>
      <p class="info-content"><span class="info-title">短评数量:</span><span class="info-text">{{movie.comments_count}}</span></p>
      <p class="info-content"><span class="info-title">影评数量:</span><span class="info-text">{{movie.reviews_count}}</span></p>
    </div>
    <div class="summary">{{movie.summary}}</div>
    <div class="author">
      <p class="author-type">导演</p>
      <mu-row>
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.directors" :key="subject.id">
          <mu-paper :zDepth="2" >
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </mu-paper>
        </mu-col>
      </mu-row>
    </div>
    <div class="author">
      <p class="author-type">主演</p>
      <mu-row>
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.casts" :key="subject.id">
          <mu-paper :zDepth="2" >
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </mu-paper>
        </mu-col>

      </mu-row>
    </div>

  </div>
</template>

<script>
	import axios from 'axios'
	import Star from './Star.vue'
	export default {
		name:'subject',
		components:{
			Star
		},
  data () {
  	return{
  		movie: {
          title: '',
          rating: {
            average: 0,
          },
          images: {},
          countries: [],
          genres: [],
          casts: [],
          directors: [],
          aka: [],
        },
  	}
   },
   mounted() {
      this.loadData();
    },
   methods:{
   	ratingStar(item) {
        if (!item) {
          return {
            star: 0,
            half: 0,
            left: 0,
          };
        }
        const intNum = Math.round(item);
        const star = Math.floor(intNum / 2);
        const half = intNum % 2;
        const left = 5 - star - half;
        return {
          star,
          half,
          left,
        };
      },
   	goBack(){
   		this.$router.go(-1)
   	},
   	loadData(){
   		 this.$axios.get('/api/movie/subject/'+this.$route.params.id)
                .then((response) => {
                    // success
                    
                     this.movie = response.data
                   	console.log(response)
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
	.image-wrap{
  width: 100%;
  padding-top: 80%;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  overflow: hidden;
}
.icon-back{
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-shadow: 0px 0px 3px #ddd;
}
.title-border{
  padding: 20px;
  box-shadow: 0 0px 15px 5px #ccc;
}
.title-info{
  position: relative;
}
.title-image{
  width: 30%;
  position: absolute;
  bottom: 0;
}
.title-image>img{
  width: 100%;
  display: block;
}
.title-text{
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 0 4px 30%;
}
.title-text>p{
  padding-left: 15px;
  margin: 0;
}
.star{
  display: flex;
  justify-content: center;
  font-size: 42px;
  color: #ff6f00;
  padding: 8px 0;
}
.star-icon{
  margin: 20px 0;
  color: #ff6f00;
}
.info{
	text-align: left;
  margin: 30px;
}
.info-content{
	display: inline-block;

}
.info-content>span{
  display:inline-block;
  text-indent: 1em;
}
.info-text{
  color: #888;
}
.summary{
  padding: 30px 20px;
  background: #eee;
}
.author{
  margin: 25px;
}
.author-type{
  padding: 0px 5px;
  margin: 0;
}
.author-elem{
  padding:5px;
}
.author-wrap{
  position: relative;
  display: block;
  overflow: hidden;
}
.author-image{
  float: left;
  width: 50%;
  border-radius: 2px  0 0 2px;
  overflow: hidden;
}
.author-padding{
  width: 100%;
  padding-top: 141%;
  background-size: cover;
  -moz-background-size: cover;
}
.author-name{ 
  float: left;
  width: 50%;
  padding: 10px 6px;
}
</style>