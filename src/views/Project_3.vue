<template>
    <v-content>
        <v-layout align-center justify-center>
            <v-flex xs8>
                <v-card>
                    <v-img :src="require('../assets/sem_projects.svg')" aspect-ratio="1.9">
                    <p id="headline">
                        Space Themed Website
                    </p>
                    <p id="subhead">
                        1st Semester Project
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
                                This was my first semester exam project at Business academy southwest. 
                                The goal was to make a website that would be published by a danish science magazine, 
                                our idea was to make a educational website for a younger target audience and we aimed 
                                for it to be interactive. We made all the planets with adobe illustrator because we 
                                wanted it to appeal more to our target audience. The stars in the background are 
                                actually moving upwards and this design was made so that our website looked like it
                                was more interactive and gave the website a dynamic aesthetic. We found the code 
                                for it online. The group and made apprioate business models that would help us push
                                the website to the target audience, like a gantt chart, shannon weaver model,
                                communication theory and a SWOT analysis. For it being my first big project to complete 
                                I am very satisfied with the result but I am also aware of the changes I should make in the future.
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
