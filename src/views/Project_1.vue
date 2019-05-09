<template>
    <v-content>
        <v-layout align-center justify-center>
            <v-flex xs8>
                <v-card>
                    <v-img :src="require('../assets/ux_projects.svg')" aspect-ratio="2.1">
                    <p id="headline">
                        EASV job portal
                    </p>
                    <p id="subhead">
                        UX project
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
                                This was a video that was made to be a informercial about a climbing gym in Esbjerg 
                                where we wanted to advertise the gym to beginners. We wanted to have some stylish b-roll and show off the gym 
                                to catch the attention of the viewer. We had a interview with the manager of the gym so that the viewers would 
                                get an insight on what the manager's opinions are and so that the viewer would like the gym is a more 
                                down to earth kind of place.
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
