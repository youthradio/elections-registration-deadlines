<template>
  <div class="row">
    <template v-if="isLoading">
      Loading...
    </template>
    <template v-else>
      <div class="col-12">
        <Dropdown
          :options="optionsData"
          :disabled="false"
          :default-selection="getUserLocation"
          placeholder-search="Search for a State"
          placeholder-select="Select a State"
          @selected="validateSelection"/>
      </div>
      <div class="col-12">
        <template v-if="selected">
          <div class="row">
            <div class="col-12">
              <div class="box-message m-3 p-3">
                <div class="title"> by Mail </div>
                <div class="date"> {{ selectedData.by_mail | formatDate }} </div>
                <div class="pointer">
                  <span class="title mr-3 link"> Register Now </span>
                  <span class="icon-arrow-right icon-size"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="box-message m-3 p-3">
                <div class="title"> Online </div>
                <div class="date"> {{ selectedData.online | formatDate }} </div>
                <div class="pointer">
                  <span class="title mr-3 link"> Register Now </span>
                  <span class="icon-arrow-right icon-size"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="box-message m-3 p-3">
                <div class="title"> In Person </div>
                <div class="date"> {{ selectedData.in_person | formatDate }} </div>
                <div class="pointer">
                  <span class="title mr-3 link"> Register Now </span>
                  <span class="icon-arrow-right icon-size"/>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'

export default {
  name: 'MainComponent',
  components:{
    Dropdown
  },
  filters: {
    formatDate(date) {
      return date.split('/')
                    .slice(0,2)
                    .join('/')
    }
  },
  data() {
    return {
      startData: "HELLO",
      selected: null
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    optionsData(){
      if(!this.isLoading){
        return this.$store.state.registrationData.map(e => ({
          name: e.state,
          id: e.abbreviation,
        }))
      }
      return [{
        name: null,
        id: null
      }]
    },
    selectedData(){
      const selectedState = this.selected.id
      return this.$store.state.registrationData
                  .find( e => e.abbreviation === selectedState)

    },
    getUserLocation(){
      return this.$store.state.userLocation;
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.selected
  },
  methods: {
    tweetMessage () {
      const url = 'https://www.youthradio.org/'
      const tweet = `Tweet Something : ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    },
    validateSelection(selection) {
      this.selected = selection;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';

.icon-size {
    font-size: 1rem;
}
.box-message {
  text-align: center;
  background-color: $green;
}
.title {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    text-transform: uppercase;
}
.date {
  font: 900 3rem/1.05 "Days Sans Black", sans-serif;
  text-transform: uppercase;
}
.link:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
