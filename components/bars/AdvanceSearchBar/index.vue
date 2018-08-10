<template>
  <div class="advanced-search-bar">
    <el-row class="field-search-bar">
      <el-row :gutter="8" class="nav-search-bar">
        <el-col
          :span="6"
          class="nav-search-bar--item"
          :class="{active: activeMenuItem === 'timvieclam'}"
        >
          <nuxt-link to="/tuyen-dung">
            <p @click="activeMenuItem = 'timvieclam'">
              <font-awesome-icon icon="briefcase"/>
              Tìm việc làm
            </p>
          </nuxt-link>
        </el-col>

        <el-col
          :span="6"
          class="nav-search-bar--item"
          :class="{active: activeMenuItem === 'timungvien' }"
        >
          <nuxt-link to="/ung-vien">
            <p @click="activeMenuItem = 'timungvien'">
              <font-awesome-icon :icon="['far', 'id-card']"/>
              Tìm ứng viên
            </p>
          </nuxt-link>
        </el-col>

        <el-col
          :span="6"
          class="nav-search-bar--item"
          :class="{active: activeMenuItem === 'timcongty' }"
        >
          <nuxt-link to="/cong-ty">
            <p @click="activeMenuItem = 'timcongty'">
              <font-awesome-icon :icon="['far', 'building']"/>
              Tìm công ty
            </p>
          </nuxt-link>
        </el-col>

        <el-col
          :span="6"
          class="nav-search-bar--item"
          :class="{active: activeMenuItem === 'timtruong' }"
        >
          <nuxt-link to="/danh-sach-truong">
            <p @click="activeMenuItem = 'timtruong'">
              <font-awesome-icon icon="school"/>
              Tìm trường
            </p>
          </nuxt-link>
        </el-col>
      </el-row>
      <div class="search-bar">
        <div v-if="activeMenuItem === 'timcongty'" style="margin-top: 10px">
          <el-row v-bind:gutter="20">
            <el-col :span="21">
              <div class="form-input">
                <font-awesome-icon icon="search"/>
                <el-input placeholder="Nhập tên công ty cùng địa điểm muốn tìm..." v-model="input"
                          prefix-icon="el-icon-dai"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <el-button
                size="medium"
                @click="activeBtn = true"
                :class="{active: activeBtn }">
                <font-awesome-icon icon="search"/>
                Tìm kiếm
              </el-button>
            </el-col>
          </el-row>
        </div>
        <div v-if="activeMenuItem === 'timtruong'" style="margin-top: 10px">
          <el-row v-bind:gutter="20">
            <el-col :span="21">
              <div class="form-input">
                <font-awesome-icon icon="search"/>
                <el-input placeholder="Nhập trường cần tìm kiếm..." v-model="input" prefix-icon="el-icon-dai"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <el-button
                size="medium"
                @click="activeBtn = true"
                :class="{active: activeBtn }">
                <font-awesome-icon icon="search"/>
                Tìm kiếm
              </el-button>
            </el-col>
          </el-row>
        </div>
        <div v-if="activeMenuItem === 'timvieclam' || activeMenuItem === 'timungvien'">

          <el-row :gutter="12" class="main-search-bar">
            <el-col :span="9" class="job-input">
              <div class="form-input">
                <font-awesome-icon icon="search"/>
                <el-input placeholder="Tiêu đề công việc, vị trí, địa điểm làm việc..." v-model="input"
                          prefix-icon="el-icon-dai"></el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="selection-box">
                <font-awesome-icon :icon="['far', 'clipboard']"/>
                <el-select v-model="value" filterable placeholder="Tất cả ngành nghề">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="selection-box">
                <font-awesome-icon icon="map-marker-alt"/>
                <el-select v-model="value" filterable placeholder="Tất cả địa điểm">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="2">
              <el-button
                size="medium"
                @click="activeBtn = true"
                :class="{active: activeBtn }">
                <font-awesome-icon icon="search"/>
                Tìm kiếm
              </el-button>
            </el-col>
          </el-row>
          <div class="advance-search-selections">
            <p class="advance-search--result">Tìm thấy 200000 kết quả</p>
            <p class="advance-search-bar--text" @click="handleOnClickShowAdvanceSearch">
              <font-awesome-icon icon="chevron-down"/>
              Chọn tìm kiếm nâng cao
            </p>
            <transition name="advances-search-fade">
              <div v-if="showAdvanceSearch" class="advance-search-selections--options">
                <el-row :gutter="12">
                  <el-col :span="8">
                    <div class="selection-box">
                      <font-awesome-icon :icon="['fas', 'user']"/>
                      <el-select v-model="value" filterable placeholder="Cấp bậc">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8">

                    <div class="selection-box">
                      <font-awesome-icon icon="dollar-sign"/>
                      <el-select v-model="value" filterable placeholder="Mức lương">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8">

                    <div class="selection-box">
                      <font-awesome-icon icon="user-clock"/>
                      <el-select v-model="value" filterable placeholder="Kinh nghiệm">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="12">
                  <el-col :span="8">
                    <div class="selection-box">
                      <font-awesome-icon icon="hotel"/>
                      <el-select v-model="value" filterable placeholder="Loại hình công việc">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="selection-box">
                      <font-awesome-icon icon="transgender"/>
                      <el-select v-model="value" filterable placeholder="Giới tính">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8" v-if="activeMenuItem === 'timungvien'">

                    <div class="selection-box">
                      <font-awesome-icon icon="globe-asia"/>
                      <el-select v-model="value" filterable placeholder="Trình độ ngoại ngữ">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </el-row>
  </div>

</template>

<script>
  import SearchBar from '../SearchBar';


  export default {
    components: {
      SearchBar,
    },
    data() {
      return {
        showAdvanceSearch: false,
        activeIndex: '1',
        activeMenuItem: 'timvieclam',
        activeBtn: '',
        input: '',
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }, {
          value: 'Option6',
          label: 'Option6'
        }, {
          value: 'Option7',
          label: 'Option7'
        }, {
          value: 'Option8',
          label: 'Option8'
        }, {
          value: 'Option9',
          label: 'Option9'
        }, {
          value: 'Option10',
          label: 'Option10'
        }],
        value: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOnClickShowAdvanceSearch() {
        this.showAdvanceSearch = !this.showAdvanceSearch;
      },
      hello() {
        alert("Hello");
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .advanced-search-bar {
    background: url("https://halutech.com.vn/assets/images/bg.jpg");
    height: 100%;
    margin-top: 56px;
  }

  .field-search-bar {
    margin: 20px auto;
    width: $page-width;
  }

  .field-search-bar .el-row {
    margin-left: 0 !important;
  }

  .nav-search-bar {
    display: flex;
    margin-top: 50px;
  }

  .search-bar {
    background-color: $color-secondary;
    width: $width-100;
    color: $color-black;
    padding: 5px;
    border-radius: 0 0 5px 5px;
    margin-bottom: 30px;
    transition: all 1s ease-in-out;
  }

  .is-active {
    color: #000000;
  }

  .active {
    color: $color-white;
    background-color: $color-secondary;
  }

  .advance-search-selections {

  }

  .advance-search-selections p {
    display: inline;
  }

  .advance-search--result {
    padding-left: 10px;
    color: $color-white;
  }

  .advance-search-bar--text {
    float: right;
    padding-right: 10px;
    color: $color-white;
  }

  .advance-search-bar--text:hover {
    cursor: pointer;
  }

  .advance-search-selections--options {
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .form-input {
    position: relative;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-left: 0;
  }

  .form-input svg {
    position: absolute;
    left: 10px;
    font-size: 18px;
    z-index: 3;
    top: 10px;
    opacity: 0.5;
  }

  .main-search-bar {
    margin-top: 10px;
  }

  .job-input {
    padding-left: 0 !important;
  }

  .advances-search-fade-enter-active {
    transition: all .2s ease;
  }
  .advances-search-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .advances-search-fade-enter, .advances-search-fade-leave-to
    /* .slide-advances-search-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .selection-box {
    position: relative;
    margin-bottom: 10px;
  }

  .el-select {
    width: 100%;
    z-index: 1;
  }

  .selection-box svg {
    position: absolute;
    z-index: 2;
    left: 10px;
    top: 10px;
    font-size: 18px;
    opacity: 0.5;
  }

  .el-button {
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    background-color: $color-secondary;
    border: 1px solid $color-white;
    color: $color-white;
    font-size: 16px;
    padding: 11px 15px;
  }

  .el-button:hover {
    background-color: $color-primary;
    box-shadow: 0 0 10px $color-white;
    cursor: pointer;
  }

  .el-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
    background-color: $color-secondary;
  }


</style>

<style lang="scss">
  @import "~assets/css/halujobs-variables";

  .el-input--suffix .el-input__inner,
  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }

  .el-select .el-input__inner:focus,
  .el-input--prefix .el-input__inner:focus {
    border-color: $color-primary;
  }

  .el-select .el-input.is-focus .el-input__inner {
    border-color: $color-primary;
  }

  .el-select-dropdown__item.selected {
    color: $color-primary;
    font-weight: bold;
  }
</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .nav-search-bar {
    width: 50%;
    text-align: center;
    margin-left: 0;
  }

  .nav-search-bar--item {
    background-color: $color-white;
    line-height: 40px;
    border-bottom: none;
    border-radius: 7px 7px 0 0;
    margin-right: 5px;
    color: $color-black;
    transition: all 0.15s ease-in-out;
  }

  .nav-search-bar--item:hover {
    cursor: pointer;
    background-color: $color-secondary;
    color: $color-white;
  }

  .nav-search-bar--item:active {
    cursor: pointer;
    background-color: $color-primary;
    color: $color-white;
    transition: none;
  }

  .active {
    color: $color-white !important;
    background-color: $color-secondary;
    cursor: default !important;
  }

  .active a {
    color: $color-white;
  }

  a {
    color: $color-black;
  }

  a:hover {
    color: $color-white;
  }

</style>

