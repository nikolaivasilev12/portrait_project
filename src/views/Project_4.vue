<template>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
            <v-flex xs10>
                <v-card>
                    <v-img :src="require('../assets/Capture45.svg')" aspect-ratio="1.9">
                    <p id="headline">
                        Product Commercial
                    </p>
                    <p id="subhead">
                        AV Production Project
                    </p>
                    </v-img>
                </v-card>
                <br>
                <v-card>
                    <v-flex xs10>
                        <div id="description_box">
                            <p id="description">
                             Description
                            </p>
                            <p id="description_text">
                                In group of four people we had to create a 30 second commercial video about a product of our choice.
                                Our product choice was a hair growth gel. The actual product in the video and in the picture above 
                                was a shower gel from a hotel. Our initial idea was to make a fun video that would appeal to people.
                                We also went with a story showcasing the way people would recommend it to each other.
                                </p>
                            </div>
                        <br>
                    
                    </v-flex>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<style scoped>
#headline{
    font-weight: 400;
    font-size: 4vw;
    padding: 2vw 0 0 3.7vw;
}
#subhead{
    font-weight: 300;
    font-size: 2vw;
    padding: 0 0 0 4vw;
}
#description {
    font-size: 3vw;
    font-weight: 400;
    padding: 2vw 0 0 4vw;
}
#description_text {
    font-size: 1vw;
    padding: 0 0 0 4vw;
    max-width: 50vw;
}
</style>

