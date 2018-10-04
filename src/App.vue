<template>
  <div
    id="app"
    class="container-fluid">
    <MainComponent/>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  },
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./styles/custom";

</style>
