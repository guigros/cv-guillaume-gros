<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <q-page class="row q-col-gutter-sm">
        <div class="left col-sm-4 col-xs-12 flex flex-center">
          <ContactBox/>
        </div>
        <div class="right col-sm-8 col-xs-12">
            <q-tabs active-color="primary">
              <q-route-tab
                label="Experience"
                icon="location_city"
                to="experience"
                exact
              />
              <q-route-tab
                label="Education"
                icon="school"
                to="education"
                exact
              />
            </q-tabs>
          <q-separator/>
          <q-scroll-area class="flex" style="height: 90vh;" :thumb-style="thumbStyle">
            <router-view class="q-mt-sm"/>
          </q-scroll-area>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
.left
  //border 2px solid magenta
  //max-width 35%
.right
  //border 2px solid green
  //align-items start
</style>

<script>
import ContactBox from '../components/ContactBox'

export default {
  name: 'MyLayout',

  components: {
    ContactBox
  },

  data () {
    return {
    }
  },

  methods: {
  },

  computed: {
    thumbStyle () {
      return {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#b3d5f2',
        width: '5px',
        opacity: 0.75
      }
    }
  }
}
</script>
