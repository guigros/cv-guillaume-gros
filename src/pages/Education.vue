<template>
  <div class="column flex-center q-gutter-sm">
    <q-card v-for="diploma in $t('diplomas')" :key="diploma.title" class="diploma">
      <q-list>
        <q-item>
          <q-item-section >
            <q-item-label>{{ diploma.title }}</q-item-label>
            <q-item-label caption>{{ diploma.subtitle }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-icon name="check" color="green" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section thumbnail>
            <q-img
              :src="diploma.logoPath"
              spinner-color="white"
              style="width: 64px; height: 64px;"
              class="q-ml-xs"
            />
          </q-item-section>
          <q-item-section >{{ diploma.school }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="location_on" class="text-primary"/>
          </q-item-section>
          <q-item-section >{{ diploma.place }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="calendar_today" class="text-primary"/>
          </q-item-section>
          <q-item-section >{{ diploma.year }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<style lang="stylus">
.diploma
  width: 100%
  max-width: 50%
</style>

<script>
export default {
  name: 'Education',

  mounted () {
  },

  data () {
    return {
    }
  }
}
</script>
