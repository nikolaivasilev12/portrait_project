<template>
    <v-content>
        <v-layout justify-center>
            <v-flex xs12 sm8>
                <div id="Headline">
                    <p id="project_h" class=" text-xs-center">
                    Projects
                    </p>
                </div>
                <v-card>
                    <v-container grid-list-md fluid>
                        <v-layout justify-center fill-height row wrap> 
                            <v-flex xs12 lg5>
                                    <v-hover>
                                        <v-card class="ma-3" max-width="500px" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                          <router-link to="/Project_4">
                                            <div id="project_4">
                                                <v-img id="project_4_img" :src="require('../assets/Capture45.svg')">
                                                    <p id="project_text" class="font-weight-regular text-xs-right">Product Commercial</p>
                                                    <p id="project_subtext" class="font-weight-thin text-xs-right">AV Production Project</p>
                                                </v-img>
                                            </div>
                                          </router-link>
                                        </v-card>
                                    </v-hover>
                            </v-flex>
                                <v-flex xs12 lg5 >
                                      <v-hover>
                                        <v-card class="ma-3" max-width="500px"  dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                          <router-link to="Project_2">
                                            <div id="project_2">
                                                <v-img id="project_2_img" :src="require('../assets/easv_videos.svg')">
                                                    <p id="project_text" class="font-weight-regular text-xs-right">EASV Promo Video</p>
                                                    <p id="project_subtext" class="font-weight-thin text-xs-right">AV Production Project</p>
                                                </v-img>
                                            </div>
                                          </router-link>
                                        </v-card>
                                      </v-hover>
                                </v-flex>
                                <v-flex xs12 lg6 offset-xs1>
                                    <v-hover>
                                        <v-card max-width="500px" class="ma-3" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                          <router-link to="Project_3">
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
                
                                <v-flex xs12 lg7 offset-xs2>
                                    <v-hover>
                                        <v-card class="ma-3" max-width="500px" dark slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                          <router-link to="Project_1">
                                            <div id="project_3">
                                                <v-img id="project_3_img" :src="require('../assets/ux_projects.svg')">
                                                    <p id="project_text" class="font-weight-regular text-xs-right">EASV Job Portal</p>
                                                    <p id="project_subtext" class="font-weight-thin text-xs-right">UX Project</p>
                                                </v-img>
                                            </div>
                                          </router-link>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                                
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-content>
</template>

<style>
#Headline {
  padding: 1vw 0 2vw 0;
  font-weight: 200;
}
#project_text {
  font-size: 1.1vw;
  padding: 1vw 1vw 0 0;
}
#project_subtext {
  padding: 0 1vw 0 0;
  font-size: 0.8vw;
}
#project_h {
    font-size: 3.5vw;
    letter-spacing: 10px;
}
a:hover, a:visited, a:link, a:active {
  text-decoration: none;
  color: white;
}

</style>

