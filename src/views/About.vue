<template>
    <v-container fluid>
        <v-layout row >
            <v-flex xs12>
                <v-flex xs12 offset-xs2 > 
                    <p id="Headline">About me</p>
                    <br>
                    <div id="descrition" >
                        <p class="text-xs-left">My name is Nikolay Vasilev. I enjoy taking photos
                            and working with all kinds of media projects.
                            I am currently studying multimedia design and
                            communications at EASV and I live in 
                            Esbjerg, Denmark. I come from Burgas- a
                            beautiful city situated on the coast of
                            Bulgaria.
                        </p>
                        <br>
                        <br>
                        <br>
                        <div id="cv_link" >
                        <a href="https://drive.google.com/open?id=1IhNGbLn1Nk6aFwrzJuGRqOMGMJ5qtnUB" id="cv_link" class="text-xs-center">
                            Click for CV
                        </a>
                        <br>
                        <br>
                        <a href="https://drive.google.com/open?id=1g6H5nrEBLddyEfp-nxUG3es6TPfWSkYH">
                            Click for Business Card
                        </a>
                        </div>       
                    </div>
                    
                      <div id="pic" class="text-xs-right">
                        <v-img id="pic" :src="require('../assets/pic.jpg')" aspect-ratio="2.7" contain></v-img>
                      </div>                                    
                </v-flex>                              
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

</script>

<style scoped>
#Headline {
    position: relative;
    letter-spacing: 1vw;
    font-size: 5vw;
    font-weight: 200;
    color: #ED5F43;
    padding:50px 0 0 50px;
}
#descrition {
    font-weight: 300;
    position: absolute;
    max-width: 400px;
    font-size: 1vw;
    padding: 0 0 0 50px;
    
}
#pic {
    bottom: 7vw;
    left: 5vw;
    max-width: 2000px;
}
#cv_link {
    
}

</style>
