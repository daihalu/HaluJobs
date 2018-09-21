<template>
  <el-row>
    <el-col :span="16">
      <gmap-map
        :center="center"
        :zoom="mapZoomSize"
        @dragend="handleOnDrag"
        @bounds_changed="handleOnchangeZoomSize"
        draggable="true"
        style="width: 100%; height: 100vh;"
        ref="haluMap"
      >

        <gmap-marker
          :position="user.position"
          :icon="userLocationMarker"
          :clickable="false"
        >
        </gmap-marker>

        <gmap-marker
          :key="index"
          v-for="(job, index) in jobList"
          :position="job.employer._coords"
          :title="jobList[index].jobTitle"
          @click="handleOnClickMarker(index)"
          :icon="markerIcon"
          :clickable="true"
        >
          <gmap-info-window
            :opened="job.showJobInfo"
            @closeclick="job.showJobInfo=false"
          >
            <attractive-job-card
              :jobInfo="jobList[index]"
            />
          </gmap-info-window>
        </gmap-marker>
      </gmap-map>
    </el-col>

    <el-col :span="8">
      <div class="box-container">
        <div ref="header">
          <p class="box-title">Có <span>{{total}}</span> công việc dành cho bạn</p>

          <div class="selection-container">
            <selection-box
              :options="radiusOptions"
              iconPrefix="far"
              iconName="dot-circle"
              placeHolder="Chọn bán kính"
              @on_select="handleOnSelectRadiusOptions"
              style="width: 30%"
            />
            <selection-box
              :options="desiredSalaryOptions"
              iconPrefix="fas"
              iconName="dollar-sign"
              placeHolder="Chọn mức lương"
              @on_select="handleOnSelectSalaryOptions"
              style="width: 34%"
            />
            <selection-box
              :options="jobOptions"
              iconPrefix="far"
              iconName="clipboard"
              placeHolder="Chọn ngành nghề"
              @on_select="handleOnSelectIndustryOptions"
              style="width: 34%"
            />
          </div>
        </div>

        <div id="job-list" class="job-list-container" :style="{height: jobBoxHeight + 'px'}">
          <div v-for="(job, index) in jobList" :key="index">
            <detail-job-card
              :jobInfo="job"
              class="job-card"
              @mouseover.native="showMarkerLabel(index)"
            />
          </div>
        </div>
      </div>


    </el-col>
  </el-row>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkLocationSalaryMapJobCard8';
  import SelectionBox from '~/components/public-components/boxs/SelectionBox';
  import DetailJobCard from '~/components/ban-do/DetailJobCard';

  import {JobOption} from '~/assets/js/data-options';

  import _ from 'lodash';

  export default {
    name: "GoogleMap",
    components: {
      AttractiveJobCard,
      SelectionBox,
      DetailJobCard
    },
    head() {
      return {
        title: this.title
      }
    },
    layout: 'google-map',
    data() {
      const {
        desiredSalaries,
        jobs,
      } = JobOption;

      return {
        title: 'Bản đồ công việc',
        total: 0,
        center: {lat: 45.508, lng: -73.587},
        user: {},
        userLocationMarker: {
          url: require('~/assets/images/marker_icon_1.png'),
          size: {width: 40, height: 40, f: 'px', b: 'px'},
          scaledSize: {width: 35, height: 35, f: 'px', b: 'px'}
        },
        markerIcon: {
          url: require('~/assets/images/marker_icon_3.jpg'),
          size: {width: 15, height: 15, f: 'px', b: 'px'},
          scaledSize: {width: 8, height: 8, f: 'px', b: 'px'},
          labelOrigin: {x: 0, y: 40},
          strokeColor: '#1ab394',
          strokeOpacity: 0.8,
          border: '5px'
        },
        jobList: [],
        jobList1: [],
        jobOptions: jobs,
        desiredSalaryOptions: desiredSalaries,
        radiusOptions: [
          {label: '3 km', value: 3},
          {label: '5 km', value: 5},
          {label: '10 km', value: 10},
          {label: '15 km', value: 15},
          {label: '20 km', value: 20},
          {label: '50 km', value: 50},
          {label: '100 km', value: 100},
          {label: 'Toàn quốc', value: 10000}
        ],
        radiusSelection: 0,
        salarySelection: '',
        industrySelection: '',
        mapZoomSize: 13,
        jobBoxHeight: null
      }
    },
    mounted() {
      this.getCurrentUserCoordinate();

      this.jobBoxHeight = window.innerHeight - this.$refs.header.clientHeight - 10;
    },
    methods: {
      getCurrentUserCoordinate() {
        navigator.geolocation.getCurrentPosition(position => {

          this.user = {
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          };

          this.center = this.user.position;
          this.getJobs(this.user.position, 10, this.salarySelection, this.industrySelection);
        });
      },
      handleOnClickMarker(index) {
        this.jobList[index].showJobInfo = !this.jobList[index].showJobInfo;

        for (let i = 0; i < this.jobList.length; i++) {
          if (i !== index) {
            this.jobList[i].showJobInfo = false;
          }
        }
        console.log("Click: " + this.jobList[index].showJobInfo);
      },

      handleOnSelectRadiusOptions(value) {
        if (value === 10) {
          return;
        } else {
          this.radiusSelection = value;
          this.center = this.user.position;
          this.getJobs(this.user.position, this.radiusSelection || 10, this.salarySelection, this.industrySelection);

          if (value === 3) {
            this.mapZoomSize = 14;
          } else if (value === 5) {
            this.mapZoomSize = 13;
          } else if (value === 15) {
            this.mapZoomSize = 12;
          } else if (value === 20) {
            this.mapZoomSize = 11;
          } else if (value === 50) {
            this.mapZoomSize = 10;
          } else if (value === 100) {
            this.mapZoomSize = 9;
          } else {
            this.mapZoomSize = 5;
          }
        }
      },

      handleOnSelectSalaryOptions(value) {
        this.salarySelection = value;
        // this.jobList1 = this.jobList.filter(job => job.salary.range === value);
        // console.log(this.jobList1);
        this.getJobs(this.user.position, this.radiusSelection || 10, this.salarySelection, this.industrySelection);
      },

      handleOnSelectIndustryOptions(value) {
        this.industrySelection = value;
        this.getJobs(this.user.position, this.radiusSelection || 10, this.salarySelection, this.industrySelection);
      },

      handleOnDrag: _.debounce(function () {
        console.log("Drag ended!");

        const centerCoordinates = {
          lat: this.$refs.haluMap.$mapObject.getCenter().lat(),
          lng: this.$refs.haluMap.$mapObject.getCenter().lng()
        };
        this.center = centerCoordinates;

        console.log(centerCoordinates);

        this.getJobs(centerCoordinates, this.radiusSelection || 10, this.salarySelection, this.industrySelection);
      }, 200),

      handleOnchangeZoomSize: _.debounce(function () {
        const zoomSize = this.$refs.haluMap.$mapObject.zoom;
        let radius = null;

        if (zoomSize >= this.mapZoomSize) {
          return;
        } else {
          if (zoomSize === 11) {
            //20
            radius = this.radiusSelection ? this.radiusSelection : 20;

          } else if (zoomSize === 10) {
            //50
            radius = this.radiusSelection ? this.radiusSelection : 50;
          } else if (zoomSize === 9) {
            //100
            radius = this.radiusSelection ? this.radiusSelection : 100;
          } else if (zoomSize === 8) {
            //500
            radius = this.radiusSelection ? this.radiusSelection : 500;
          } else if (zoomSize === 7) {
            //500
            radius = this.radiusSelection ? this.radiusSelection : 800;
          } else {
            radius = this.radiusSelection ? this.radiusSelection : 3000;
          }
        }

        console.log("change zoom size");
        this.getJobs(this.user.position, radius, this.salarySelection, this.industrySelection);
      }, 200),

      getJobs(coordinates, radius, salary, industry) {
        const url = `/api/jobs?coords=${coordinates.lat},${coordinates.lng}&radius=${radius}&salary=${salary}&industry=${industry}`;
        this.$axios.$get(url)
          .then(res => {
            console.log(res);
            this.total = res._total;
            this.jobList = res.jobs.map(job => {
              return {...job, showJobInfo: false}
            });
            console.log(this.jobList)
          })
      },

      showMarkerLabel(index) {
        this.jobList[index].showJobInfo = true;
        for (let i = 0; i < this.jobList.length; i++) {
          if (i !== index) {
            this.jobList[i].showJobInfo = false;
          }
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/halujobs_variables';

  .box-container {
    padding: 10px 0 10px 10px;
    height: 100vh;

    .box-title {
      border-bottom: none;
      padding: 0 10px 10px 0;
    }
  }

  .selection-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $color-border;
    border-top: 1px solid $color-border;
    padding: 15px 0;
  }

  .job-list-container {
    overflow: auto;
    height: inherit;
    padding: 10px 1px 10px;
    .job-card {
      margin-top: 10px;
    }
  }

  #job-list::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #job-list::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  /* Handle */
  #job-list::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #job-list::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }
</style>

