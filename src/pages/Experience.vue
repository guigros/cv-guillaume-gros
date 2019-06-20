<template>
  <div class="q-ml-sm">
    <q-timeline layout="dense" side="right" color="primary">
        <q-timeline-entry v-for="job in $t('jobs')" :key="job.date"
          :title="getTitle(job)"
          :subtitle="job.date"
        >
          <p v-html="job.description"></p>
        </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style lang="stylus">
</style>

<script>
export default {
  name: 'Experience',

  mounted () {
  },

  data () {
    return {
    }
  },

  methods: {
    getTitle (job) {
      return job.company + ' - ' + job.title
    }
  }
}
</script>
