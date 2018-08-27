<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="13"
      style="width:80%;  height: 600px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        title="Hi there"
        label="hello"
        shape="circle"
        @click="center=m.position"
        class="marker"
      >
        <gmap-info-window v-if="showJobInfo">
          <attractive-job-card
            :jobInfo="jobInfo"
          />
        </gmap-info-window>
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkLocationSalaryJobCard8';

  export default {
    name: "GoogleMap",
    components: {
      AttractiveJobCard
    },
    head() {
      return {
        title: this.title
      }
    },
    layout: 'google-map',
    data() {
      return {
        title: 'Bản đồ công việc',
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null,
        icon: require('~/assets/images/marker_icon.png'),
        jobInfo: {
          jobTitle: "Giám đốc điều hành nhân sự Giám đốc điều hành nhân sự",
          companyName: "Công ty cổ phần Đại Nam",
          salary: "15 - 22 triệu",
          deadline: "30/7/2018",
          workAddress: "Sài Gòn",
          logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
          jobUrl: "/tuyen-dung/viec-lam",
        },
        showJobInfo: false
      }
    },
    mounted() {
      this.geolocate();
    },
    methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers.push({position: marker});
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.markers.push({position: this.center});
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/halujobs_variables';

  .marker {
    img {
      width: 30px;
    }
  }

</style>

<style lang="scss">

</style>
