//from https://github.com/romainsimon/vue-simple-search-dropdown
<template>
  <div
    v-if="options"
    class="dropdown">

    <!-- Dropdown Input -->
    <input
      v-model="searchFilter"
      :disabled="disabled"
      :placeholder="placeholderSearch"
      class="dropdown-input"
      @blur="exit()"
      @click="showOptions()"
      @keyup.native="keyMonitor()">

    <!-- Dropdown Menu -->
    <div
      v-show="optionsShown"
      class="dropdown-content">
      <div
        v-for="(option,i) of filteredOptions"
        :key="`option-drop-${i}`"
        class="dropdown-item"
        @mousedown="selectOption(option)">
        {{ option.name || option.id || '-' }}
      </div>
    </div>
    <select
        ref="dropdownSelectbox"
        v-model="selectedOptionDropdown"
        class="select">
        <option
          value=""
          selected>{{ placeholderSelect }}</option>
        <option
          v-for="(option,i) of options"
          :key="`select-drop-${i}`"
          :value="option.id">
          {{ option.name || option.id || '-' }}
        </option>
      </select>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: {
      options: {
        type: Array,
        required: true,
        default() {
          return []
        },
        note: 'Options of dropdown. An array of options with id and name',
      },
      placeholderSearch: {
        type: String,
        required: false,
        default: 'Please select an option',
        note: 'Placeholder of dropdown'
      },
      placeholderSelect: {
        type: String,
        required: false,
        default: 'Please select an option',
        note: 'Placeholder of dropdown'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
        note: 'Disable the dropdown'
      }
    },
    data() {
      return {
        selected: {},
        optionsShown: false,
        searchFilter: '',
        selectedOptionDropdown: '',
      }
    },
    computed: {
      filteredOptions() {
        const filtered = [];
        const regOption = new RegExp(this.searchFilter, 'ig');
        for (const option of this.options) {
          if (this.searchFilter.length < 1 || option.name.match(regOption)){
            filtered.push(option);
          }
        }
        return filtered;
      }
    },
    watch: {
      searchFilter() {
        if (this.filteredOptions.length === 0) {
          this.selected = {};
        } else {
          this.selected = this.filteredOptions[0];
        }
        this.$emit('filter', this.searchFilter);
      },
      selectedOptionDropdown() {
        this.selectOption(this.options.find(e => e.id === this.selectedOptionDropdown))
      }
    },

    created() {
      this.$emit('selected', this.selected);
    },
    methods: {
      selectOption(option) {
        this.selected = option;
        this.optionsShown = false;
        this.searchFilter = this.selected.name;
        this.selectedOptionDropdown = this.selected.id;
        this.$emit('selected', this.selected);
      },
      showOptions(){
        if (!this.disabled) {
          this.searchFilter = '';
          this.optionsShown = true;
        }
      },
      exit() {
        if (!this.selected.id) {
          this.selected = {};
          this.searchFilter = '';
        } else {
          this.searchFilter = this.selected.name;
        }
        this.$emit('selected', this.selected);
        this.optionsShown = false;
      },
      // Selecting when pressing Enter
      keyMonitor: function(event) {
        if (event.key === "Enter" && this.filteredOptions[0]){
          this.selectOption(this.filteredOptions[0]);
        }
      }
    },
    template: 'Dropdown',
  };
</script>


<style lang="scss" scoped>
  @import '~@/styles/variables';

  .select {
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
  .dropdown {
    font: $font-type;
    width: 100%;
    position: relative;
    display: flex;
    margin: auto;
    .dropdown-input {
      background: #fff;
      cursor: pointer;
      border: 1px solid #e7ecf5;
      border-radius: 3px;
      color: #333;
      display: block;
      font-size: .8em;
      padding: 6px;
      width: 100%;
      &:hover {
        background: #f8f8fa;
      }
    }
    .dropdown-content {
      font: $font-type;
      position: absolute;
      background-color: #fff;
      top: 100%;
      width: 100%;
      max-height: 350px;
      overflow-y: scroll;
      border: 1px solid #e7ecf5;
      box-shadow: 0px -8px 34px 0px rgba(0,0,0,0.05);
      z-index: 1;
      .dropdown-item {
        color: black;
        font-size: .7em;
        line-height: 1em;
        padding: 8px;
        text-decoration: none;
        display: block;
        cursor: pointer;
        &:hover {
          background-color: #e7ecf5;
        }
      }
    }
    .dropdown:hover .dropdowncontent {
      display: block;
    }
  }
</style>
