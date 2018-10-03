<template>
  <div class="row">
    <div class="col-12">
      <template v-if="!isLoading">
        {{ startData }}
      </template>
      <template v-else>
        Loading...
      </template>
      <Dropdown
        :options="optionsData"
        :disabled="false"
        default="getUserLocation"
        placeholder-search="Search for a State"
        placeholder-select="Select a State"
        @selected="validateSelection"
        @filter="getDropdownValues"/>
      <div class="d-flex align-items-center pl-3 pb-2">
        <span
          class="icon-twitter-inverted share-icon m-1 pointer"
          @click="tweetMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'

export default {
  name: 'MainComponent',
  components:{
    Dropdown
  },
  data() {
    return {
      startData: "HELLO",
      selected: { name: null, id: null }
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
  methods: {
    tweetMessage () {
      const url = 'https://www.youthradio.org/'
      const tweet = `Tweet Something : ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    },
    validateSelection(selection) {
      this.selected = selection;
    },
    getDropdownValues(keyword) {
      console.log('You could refresh options by querying the API with '+keyword);
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';

</style>
