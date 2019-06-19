<template>
  <div class="column flex-center q-gutter-sm">
    <q-card v-for="diploma in diplomas" :key="diploma.title" class="diploma">
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
      diplomas: [
        {
          title: 'Diplôme d\'Ingénieur',
          subtitle: 'Electronique et informatique industrielle (par apprentissage)',
          place: 'Université Joseph Fourier – Grenoble, France',
          school: 'Polytech Grenoble',
          year: 2012,
          logoPath: 'statics/logo_polytech.jpg'
        },
        {
          title: 'DUT GEII',
          subtitle: 'Electronique et informatique industrielle ',
          place: 'Université Joseph Fourier – Grenoble, France',
          school: 'IUT 1 Grenoble',
          year: 2009,
          logoPath: 'statics/logo_iut.jpg'
        }
      ]
    }
  }
}
</script>
