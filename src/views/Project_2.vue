<template>
    <v-content>
        <v-layout align-center justify-center>
            <v-flex xs8>
                <v-card>
                    <v-img :src="require('../assets/easv_videos.svg')" aspect-ratio="2.1">
                    <p id="headline">
                        EASV Promotional Video
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
                                We were given the task of developing a method to attract more students to come and study at EASV. 
                                We were a group of four and after brainstorming we decided to make a promotional video about the academy and the programs. 
                                This would give people a better idea of what kind of institution they would be coming to. 
                                We decided to use a teacher as a voiceover, to add a personal touch to the video, and it was important 
                                to us that the teacher had confidence and good english. A section of this project was also being able
                                to present the video and its concept to the marketing coordinator of Business Academy Southwest, and
                                if the concept proved to be sufficient she would use it.
                            </p>
                            </div>
                        <br>

                    </v-flex>
                </v-card>
            </v-flex>
        </v-layout>
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
