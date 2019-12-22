<template>
  <el-table stripe :loading="dataProcessing" :data="dataToShow">
    <el-table-column prop="ackId" label="Ack Id" />
    <el-table-column prop="planName" label="Plan Name" />
    <el-table-column prop="sponsorDfeName" label="Sponsor DFE Name" />
  </el-table>
</template>

<script>
// import json from '@/assets/data.json';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['dataToShow', 'dataProcessing', 'dataFormatted']),
  },
};
</script>
