<template>
  <div class="row">
    <template v-if="isLoading">
      <div class="row">
        <div class="col-12">
          Loading...
        </div>
      </div>
    </template>
    <template v-else>
      <div class="col-12">
        <select
          v-model="selectedOption"
          class="select">
          <option
            value=""
            disabled
            selected>
            Select a State
          </option>
          <option
            v-for="(option,i) of optionsData"
            :key="`select-drop-${i}`"
            :value="option.id">
            {{ option.name || option.id || '-' }}
          </option>
        </select>
      </div>
      <div class="col-12">
        <template v-if="selectedData && selectedOption">
          <div class="row">
            <div class="col-12">
              <div :class="[checkDatePassed(selectedData.by_mail)?'box-red':'','box-message m-3 p-3']">
                <div class="title"> by Mail </div>
                <div class="date"> {{ selectedData.by_mail | formatDate }} </div>
                <div>
                  <span
                    class="title mr-3 link pointer"
                    @click="openLink(selectedData.link_to_register_by_mail)"> Register Now </span>
                  <span class="icon-arrow-right icon-size"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div :class="[checkDatePassed(selectedData.online)?'box-red':'','box-message m-3 p-3']">
                <div class="title"> Online </div>
                <div class="date"> {{ selectedData.online | formatDate }} </div>
                <div>
                  <span
                    class="title mr-3 link pointer"
                    @click="openLink(selectedData.link_to_register_online)"> Register Now </span>
                  <span class="icon-arrow-right icon-size"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div :class="[checkDatePassed(selectedData.in_person)?'box-red':'','box-message m-3 p-3']">
                <div class="title"> In Person </div>
                <div class="date"> {{ selectedData.in_person | formatDate }} </div>
                <div>
                  <span
                    class="title mr-3 link pointer"
                    @click="openLink(selectedData.link_to_register_in_person)"> Register Now </span>
                  <span class="icon-arrow-right icon-size"/>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="row">
            <div class="col-12">
              Loading...
            </div>
          </div>
        </template>

      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
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
      selectedOption: '',
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
      const selectedState = this.selectedOption
      return this.$store.state.registrationData
                  .find( e => e.abbreviation === selectedState)

    },
    getUserLocation(){
      return this.$store.state.userLocation;
    }
  },
  watch: {
    getUserLocation(){
        this.selectedOption = this.getUserLocation
     }
  },
  methods: {
    checkDatePassed(date){
        const now = new Date()
        const old = new Date(date)
        now.setHours(0,0,0,0);
        if(old == 'Invalid Date'){
          return true
        }
        return now > old;
    },
    tweetMessage () {
      const url = 'https://www.youthradio.org/'
      const tweet = `Tweet Something : ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    },
    validateSelection(selection) {
      this.selected = selection;
    },
    openLink(url) {
      window.open(url, '_blank')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/variables";

.icon-size {
  font-size: 1rem;
}
.box-message {
  text-align: center;
  background-color: $green;
}
.box-red {
  background-color: $red;
}
.title {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Roboto Mono", sans-serif;
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
.select {
  font: 900 3rem/1.05 "Days Sans Black", sans-serif;

  // -webkit-appearance: button;
  // -moz-appearance: button;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  // color: #555;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
