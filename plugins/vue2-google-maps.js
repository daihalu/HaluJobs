import Vue from "vue";
import {API_KEY} from '~/halujobs.config';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
    libraries: "places" // necessary for places input
  }
});
