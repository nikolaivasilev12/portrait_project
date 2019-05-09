<template>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs10>           
            <v-layout align-center justify-center>
                  <v-flex xs12>
                      <div id="img_1">
                        <v-img id="v-img" :src="require('../assets/IMG_1.jpg')" aspect-ratio="1.78" contain>
                            <v-img id="headline" :src="require('../assets/Photography.png')" aspect-ratio="20" contain  ></v-img>
                        </v-img>
                      </div>
                      <div id="img_2">
                        <v-img id="v-img_2" :src="require('../assets/IMG_2.jpg')" aspect-ratio="1.78" contain>
                        </v-img>
                      </div>
                      <div id="img_3">
                        <v-img id="v-img_3" :src="require('../assets/IMG_3.jpg')" aspect-ratio="2.4" contain>
                        </v-img>
                      </div>
                      <div id="img_4">
                        <v-img id="v-img_4" :src="require('../assets/IMG_4.jpg')" aspect-ratio="2" contain>
                        </v-img>
                      </div>
                      <div id="img_5">
                        <v-img id="v-img_5" :src="require('../assets/IMG_5.jpg')" aspect-ratio="2.4" contain>
                        </v-img>
                      </div>
                      <div id="img_6">
                        <v-img id="v-img_6" :src="require('../assets/IMG_6.jpg')" aspect-ratio="1.4" contain>
                        </v-img>
                      </div>
                  </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>

</script>

<style scoped>
#v-img {
    z-index: 0;
    position: relative;
}
#headline {
    z-index: 1;
    position: relative;
    right: 22.5vw;
    top: 18vw;
}
#img_2 {
    position: relative;
    z-index: 0;
    margin-top: 15vw;
    right: 17.6vw;
}
#img_3 {
    position: relative;
    z-index: 1;
    bottom: 5vw;
}
#img_4 {
    position: relative;
    z-index: 2;
    bottom: 8vw;
    left: 4vw;
}
#img_5 {
    position: relative;
    z-index: 0;
    bottom: 10vw;
    right: 10vw;
    margin-bottom: 0;
}
#img_6 {
    position: relative;
    z-index: 1;
    max-width: 700px;
    top: -12vw;
    left: 15vw;
}
</style>


