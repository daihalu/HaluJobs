<template>
  <div>
    <div>
      <h2>Tìm kiếm 1 địa điểm: </h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace"
        >
        </gmap-autocomplete>
        <button @click="getRoute">Add</button>
      </label>
      <br/>

      <div>
        <p>Chọn bán kính:</p>
        <selection-box
          :options="radiusOptions"
          iconPrefix="far"
          iconName="dot-circle"
          placeHolder="Chọn bán kính"
          @on_select="handleOnSelectRadiusOptions"
          style="width: 300px"
        />
      </div>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="11"
      style="width:100%; height: 80vh;"
      ref="haluMap"
    >
      <gmap-circle
        :center="center"
        :radius="radiusSelection"
        :options="{
          strokeColor: '#1ab394',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#1ab394',
          fillOpacity: 0.2,
        }"
      >
      </gmap-circle>

      <gmap-marker
        :position="user.position"
        title="You there"
        :icon="userLocationMarker"
        :clickable="false"
      >
      </gmap-marker>

      <!--:label="{-->
      <!--text: jobList[index].salary,-->
      <!--color: 'red',-->
      <!--fontSize: '30px',-->
      <!--border: '5px'-->
      <!--}"-->
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :title="jobList[index].jobTitle"
        @click="handleOnClickMarker(index)"
        :icon="markerIcon"
        :clickable="true"
        v-if="m.showMarker"
      >
        <gmap-info-window
          :opened="m.showJobInfo"
          @closeclick="m.showJobInfo=false"
          :options="{
            width: '800'
          }"
          style="max-width: 800px"
        >
          <attractive-job-card
            :jobInfo="jobList[index]"
            :distance="m.route.distance"
            :duration="m.route.duration"
          />
        </gmap-info-window>
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkLocationSalaryMapJobCard8';
  import SelectionBox from '~/components/public-components/boxs/SelectionBox';

  export default {
    name: "GoogleMap",
    components: {
      AttractiveJobCard,
      SelectionBox
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
        center: {lat: 45.508, lng: -73.587},
        routes: null,
        user: {},
        markers: [],
        places: [],
        currentPlace: null,
        userLocationMarker: {
          url: require('~/assets/images/marker_icon_1.png'),
          size: {width: 40, height: 40, f: 'px', b: 'px'},
          scaledSize: {width: 35, height: 35, f: 'px', b: 'px'}
        },
        markerIcon: {
          url: require('~/assets/images/marker_icon.png'),
          scaledSize: {width: 20, height: 30, f: 'px', b: 'px'},
          labelOrigin: {x: 0, y: 40},
          strokeColor: '#1ab394',
          strokeOpacity: 0.8,
          border: '5px'
        },
        jobList: [
          {
            jobTitle: "Giám đốc điều hành nhân sự",
            companyName: "Công ty cổ phần Đại Nam",
            salary: "15 - 22 triệu",
            deadline: "30/7/2018",
            workAddress: "Sài Gòn",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
            jobUrl: "/tuyen-dung/viec-lam",
            location: '510 quang trung, hà đông',
          },
          {
            jobTitle: "Giám đốc điều hành nhân sự Giám đốc điều hành nhân sự",
            companyName: "Công ty cổ phần Đại Nam",
            salary: "15 - 22 triệu",
            deadline: "30/7/2018",
            workAddress: "Sài Gòn",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
            jobUrl: "/tuyen-dung/viec-lam",
            location: 'Ô mai Hồng Lam 151 Quang Trung'
          },
          {
            jobTitle: "Giám đốc điều hành",
            companyName: "Công ty cổ phần Đại Nam",
            salary: "15 - 22 triệu",
            deadline: "30/7/2018",
            workAddress: "Sài Gòn",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
            jobUrl: "/tuyen-dung/viec-lam",
            location: 'T2, 36/7 Ngọc Khánh, Ba Đình, Hà Nội'
          },
          {
            jobTitle: "Giám đốc điều hành Kinh tế",
            companyName: "Công ty cổ phần Đại Hà",
            salary: "15 - 22 triệu",
            deadline: "30/7/2018",
            workAddress: "Phú Thọ",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
            jobUrl: "/tuyen-dung/viec-lam",
            location: 'Unnamed Road, Trung Sơn, Yên Lập, Phú Thọ, Việt Nam'
          }
        ],
        radiusOptions: [
          {label: '3 km', value: 3000},
          {label: '5 km', value: 5000},
          {label: '10 km', value: 10000},
          {label: '15 km', value: 15000},
          {label: '20 km', value: 20000},
          {label: 'Khác', value: 'Khác'}
        ],
        radiusSelection: 0
      }
    },
    mounted() {
      this.getCurrentUserCoordinate();

      for (let i = 0; i < this.jobList.length; i++) {
        this.getCoordinateOfAddresses(this.jobList[i].location);
      }

      console.log("markers: ");

      console.log(this.markers);
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
      getCurrentUserCoordinate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          // console.log(position);

          this.user = {
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          };


        });

      },
      getRoute(destination) {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.$refs.haluMap.$mapObject);

        let vm = this;

        //Draw polyline
        // vm.directionsDisplay.setDirections(response)

        return new Promise(function (resolve, reject) {
          vm.directionsService.route({
            origin: vm.user.position,
            destination: destination,
            travelMode: 'DRIVING'
          }, (response, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              resolve(response);
            } else {
              reject(status);
            }
          });
        })

      },
      getCoordinateOfAddresses(address) {
        let vm = this;

        this.$refs.haluMap.$mapPromise.then(function () {
          let geocoder = new google.maps.Geocoder();

          geocoder.geocode({'address': address}, function (response, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              let position = {
                lat: response[0].geometry.location.lat(),
                lng: response[0].geometry.location.lng()
              };

              vm.getRoute(position)
                .then(data => {
                  vm.markers.push({
                      position: position,
                      showJobInfo: false,
                      showMarker: true,
                      route: {
                        distance: data.routes[0].legs[0].distance.text,
                        duration: data.routes[0].legs[0].duration.text
                      }
                    }
                  );
                })
                .catch(err => console.log(err))
            }
          });
        });
      },
      handleOnClickMarker(index) {
        this.markers[index].showJobInfo = !this.markers[index].showJobInfo;

        for (let i = 0; i < this.markers.length; i++) {
          if (i !== index) {
            this.markers[i].showJobInfo = false;
          }
        }

        console.log("Click: " + this.markers[index].showJobInfo);
        console.log(this.markers);
      },
      handleOnSelectRadiusOptions(value) {
        this.radiusSelection = value;

        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].showJobInfo = false;
          if (value === 'Khác') {
            this.markers[i].showMarker = true;
            this.radiusSelection = 0;
          } else {
            let distance = this.markers[i].route.distance.replace(/( +)\w+/, "");
            this.markers[i].showMarker = parseInt(distance) * 1000 <= value;
          }
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/halujobs_variables';

  .labels {
    border: 1px solid red;
  }
</style>

<style lang="scss">

</style>
