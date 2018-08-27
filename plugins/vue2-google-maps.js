import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyByBB1jSXbMCz1dlG85eIN5N_y3j7fLRCU",
    libraries: "places" // necessary for places input
  }
});
