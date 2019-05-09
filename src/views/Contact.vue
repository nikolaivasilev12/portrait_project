<template>
    <v-content>
        <v-layout align-center justify-center>
            <v-flex xs8>
                <p id="headline">Contact</p>
                <i id="gps" class="material-icons">gps_fixed</i>
                <br>
                <i id="phone" class="material-icons">phone_iphone</i>
                <br>
                <i id="email" class="material-icons">email</i>
            </v-flex>
        </v-layout>
        <v-layout  align-center justify-center>
            <v-flex xs7>
                <p id="info">Stormgade 200, C, 47,6700 Esbjerg, Denmark</p>
                <p id="info">+45 50 17 79 85</p>
                <p id="info">nikolaivasilev208@gmail.com</p>
            </v-flex>
        </v-layout>
    </v-content>
</template>

<style scoped>
#headline {
    font-size: 5vw;
    font-weight: 200;
    letter-spacing: 10px;
    color: #ED5F43;
}
.material-icons {
    padding: 1.5vw 0 0 0;
}
#info {
    font-size: 0.8vw;
    position: relative;
    bottom: 7.55vw;
    right: 1.5vw;
    padding: 0 0 20px 0;
}
</style>

