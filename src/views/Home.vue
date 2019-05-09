<template>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs10>
            <v-card>
               <v-layout align-center justify-center>
                <v-flex xs6>
                  <div id="portfolio" >
                    <p class=" font-weight-regular">Nikolay Vasilev</p>  
                  </div>  
                    <p id="subhead">Multimedia design and communcation student</p>
                </v-flex>
                  <v-flex xs8>
                    <v-img id="v-img" alt="Landscape photography picture portfolio" :src="require('../assets/IMG_0504.jpg')" aspect-ratio="1.78" contain>
                    <v-layout>
                      <v-flex xs10 offset-xs6>
                       <div id="top_button">
                        <router-link to="/About">
                         <v-btn id="button" xs4 absolute bottom right color="#ED5F43">More about me</v-btn>
                        </router-link>
                       </div>
                      </v-flex>
                    </v-layout>
                    </v-img>
                  </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
          <div id="projects">
            <p class="text-xs-center">Projects</p>
          </div>
        <v-layout  wrap align-center justify-center row>
          <v-flex xs12 lg5>
            <v-hover>
                  <v-card class="ma-2" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"> 
                   <router-link to="/Project_3"> 
                    <div id="project_1">
                      <v-img id="project_1_img" :src="require('../assets/sem_projects.svg')">
                       <p id="project_text" class="font-weight-regular text-xs-right">Space themed website</p>
                       <p id="project_subtext" class="font-weight-thin text-xs-right">1st Semester Project</p>
                      </v-img>
                    </div>
                   </router-link>                    
                  </v-card>
            </v-hover>            
          </v-flex>
          <v-flex xs12 lg5 >
                <v-hover>
                  <v-card class="ma-2" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                   <router-link to="/Project_2">
                    <div id="project_2">
                      <v-img id="project_1_img" :src="require('../assets/easv_videos.svg')">
                       <p id="project_text" class="font-weight-regular text-xs-right">EASV Promo Video</p>
                       <p id="project_subtext" class="font-weight-thin text-xs-right">AV Production Project</p>
                      </v-img>
                    </div>
                   </router-link>
                  </v-card>
                </v-hover>
          </v-flex>
           <v-flex xs12 lg5>
              <v-hover>
                  <v-card class="ma-2" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                    <router-link to="/Project_1">
                    <div id="project_3">
                      <v-img id="project_1_img" :src="require('../assets/ux_projects.svg')">
                       <p id="project_text" class="font-weight-regular text-xs-right">EASV Job Portal</p>
                       <p id="project_subtext" class="font-weight-thin text-xs-right">UX Project</p>
                      </v-img>
                    </div>
                    </router-link>
                  </v-card>
              </v-hover>
          </v-flex>
          <v-flex xs12 lg5  >
              <v-hover>
                  <v-card class="ma-2" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                   <router-link to="/Project_4">
                    <div id="project_4">
                      <v-img id="project_1_img" :src="require('../assets/Capture45.svg')">
                       <p id="project_text" class="font-weight-regular text-xs-right">Product Commercial</p>
                       <p id="project_subtext" class="font-weight-thin text-xs-right">AV Production Project</p>
                      </v-img>
                    </div>
                   </router-link>
                  </v-card>
              </v-hover>
          </v-flex>
          
        </v-layout>
      </v-container>
      <v-container>
        <div id="projects">  
          <p class="text-xs-center">Video CV</p>
        </div>
        <v-layout wrap align-center justify-center row>
          <v-flex xs10>
            <div class="youtube-responsive-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/F2g1iFoJWN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

</template>

<script>


</script>

<style scoped>

#portfolio {
  z-index: 2;
  position:relative;
  letter-spacing:0.25em !important;
  font-size: 2.3vw !important; 
  margin-left: 15%;
}

#subhead{
  font-size: 1vw;
  margin-left: 4.9vw;
  width: 12vw;
  color: #aaaaaa;
}

#v-img {
  z-index:1;
  position: relative;
  margin-left: -30%;

}
#projects {
  font-size: 2.2vw;
  letter-spacing: 0.15em;
  font-weight: 300;
  padding: 2em;
}
#project_text{
  font-size: 1.1vw;
  padding: 3vw 3vw 0 0;
  text-decoration: none;
  color: white;
  
}
a:hover, a:visited, a:link, a:active {
  text-decoration: none;
  color: white;
}
#project_subtext{
  padding: 0 3vw 0 0;
  font-size: 0.8vw;
  text-decoration: none;
  color: white;
}
.youtube-responsive-container {
position:relative;
padding-bottom:56.25%;
padding-top:30px;
height:0;
overflow:hidden;
}

.youtube-responsive-container iframe, .youtube-responsive-container object, .youtube-responsive-container embed {
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
}
#top_button {
  position: relative;
  top: 28vw;
  right: 1vw;
  height: 100%;
  width: 100%;
  
}
</style>
