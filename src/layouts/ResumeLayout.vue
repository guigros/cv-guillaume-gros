<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container class="row q-col-gutter-sm">
      <div class="left col-sm-4 col-xs-12 flex flex-center">
        <ContactBox/>
      </div>
      <div class="right col-sm-8 col-xs-12">
        <div class="q-pa-sm router-view">
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
        </div>
        <router-view class="router-view"/>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
.router-view
  border 2px solid red
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
  }
}
</script>
