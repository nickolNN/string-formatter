<template>
  <div id="app">
    <el-button v-if="!dataFormatted" @click="loadDataFromFile" :loading="dataProcessing">
      Format data
    </el-button>
    <el-button v-else @click="resetFormatting">Reset formatting</el-button>
    <preview />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Preview from '@/components/Preview.vue';

export default {
  name: 'app',
  components: {
    Preview,
  },
  methods: {
    ...mapActions(['loadDataFromFile', 'resetFormatting']),
  },
  computed: {
    ...mapGetters(['dataProcessing', 'dataFormatted']),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
