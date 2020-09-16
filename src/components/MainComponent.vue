<template>
  <div class="row">
    <template v-if="isLoading">
      <div class="row">
        <div class="col-12">Loading...</div>
      </div>
    </template>
    <template v-else>
      <div class="col-12">
        <select v-model="selectedOption" class="select rounded">
          <option value="" disabled selected>Select a State</option>
          <option
            v-for="(option, i) of optionsData"
            :key="`select-drop-${i}`"
            :value="option.id"
          >
            {{ option.name || option.id || '-' }}
          </option>
        </select>
      </div>
      <div class="col-12">
        <template v-if="selectedData && selectedOption">
          <div class="row">
            <div class="col-md-4">
              <a
                :href="selectedData.link_to_register_by_mail"
                target="_blank"
                rel="nofollow"
                class="title mr-3 link pointer"
              >
                <div
                  :class="[
                    checkDatePassed(selectedData.by_mail) ? 'box-red' : '',
                    'box-message rounded mt-3 p-3',
                  ]"
                >
                  <div class="title">by Mail</div>
                  <div class="date">
                    {{ selectedData.by_mail | formatDate }}
                  </div>
                  <div>
                    <Arrow />
                  </div>
                  <!-- <span class="icon-arrow-right icon-size"/> -->
                </div>
              </a>
            </div>
            <div class="col-md-4">
              <a
                class="title mr-3 link pointer"
                :href="selectedData.link_to_register_online"
                target="_blank"
                rel="nofollow"
              >
                <div
                  :class="[
                    checkDatePassed(selectedData.online) ? 'box-red' : '',
                    'box-message rounded mt-3 p-3',
                  ]"
                >
                  <div class="title">Online</div>
                  <div class="date">{{ selectedData.online | formatDate }}</div>
                  <div>
                    <Arrow />
                  </div>
                  <!-- <span class="icon-arrow-right icon-size"/> -->
                </div>
              </a>
            </div>
            <div class="col-md-4">
              <a
                :href="selectedData.link_to_register_in_person"
                target="_blank"
                rel="nofollow"
                class="title mr-3 link pointer"
              >
                <div
                  :class="[
                    checkDatePassed(selectedData.in_person) ? 'box-red' : '',
                    'box-message rounded mt-3 p-3',
                  ]"
                >
                  <div class="title">In Person</div>
                  <div class="date">
                    {{ selectedData.in_person | formatDate }}
                  </div>
                  <div>
                    <Arrow />
                  </div>
                  <!-- <span class="icon-arrow-right icon-size"/> -->
                </div>
              </a>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="row">
            <div class="col-12">Loading...</div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Arrow from './ArrowIcon';

export default {
  name: 'MainComponent',
  components: {
    Arrow,
  },
  filters: {
    formatDate(date) {
      return date
        .split('/')
        .slice(0, 2)
        .join('/');
    },
  },
  data() {
    return {
      startData: 'HELLO',
      selectedOption: '',
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    optionsData() {
      if (!this.isLoading) {
        return this.$store.state.registrationData.map((e) => ({
          name: e.state,
          id: e.abbreviation,
        }));
      }
      return [
        {
          name: null,
          id: null,
        },
      ];
    },
    selectedData() {
      const selectedState = this.selectedOption;
      return this.$store.state.registrationData.find(
        (e) => e.abbreviation === selectedState
      );
    },
    getUserLocation() {
      return this.$store.state.userLocation;
    },
  },
  watch: {
    getUserLocation() {
      this.selectedOption = this.getUserLocation;
    },
  },
  methods: {
    checkDatePassed(date) {
      const now = new Date();
      const old = new Date(date);
      now.setHours(0, 0, 0, 0);
      if (old == 'Invalid Date') {
        return true;
      }
      return now > old;
    },
    tweetMessage() {
      const url = 'https://www.youthradio.org/';
      const tweet = `Tweet Something : ${url}`;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweet
      )}`;
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no');
    },
    validateSelection(selection) {
      this.selected = selection;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';

.icon-size {
  font-size: 1rem;
}
.box-message:before {
  content: '';
  display: block;
  padding-bottom: 10%;
}
.box-message {
  text-align: center;
  background-color: $green;
}
.box-message:after {
  content: '';
  display: block;
  padding-bottom: 10%;
}
.box-red {
  background-color: $red;
}
.title {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Roboto Mono', sans-serif;
  text-transform: uppercase;
}
.date {
  font: 900 3rem/1.05 'Days Sans Black', sans-serif;
  text-transform: uppercase;
}
.link:hover {
  text-decoration: underline;
  cursor: pointer;
}
.select {
  font: 600 3rem/1.05 'Assistant', sans-serif;
  background-color: #e0e0e0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: none;
  //border-radius: 2px;
  //box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: $black;
  font-size: inherit;
  padding: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-image: url('../assets/icons/arrowSmall.svg');
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  option {
    font: 400 1rem/1.05 'Assistant', sans-serif;
    background-color: #e0e0e0;
  }
}
a:hover {
  text-decoration: none !important;
}
</style>
