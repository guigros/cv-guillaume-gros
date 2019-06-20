<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <q-page class="row q-col-gutter-sm">
        <div class="fixed-top-right q-pa-none">
          <q-tabs
            dense
            switch-indicator
            class="bg-grey-2"
            v-model="currentLang"
          >
            <q-tab v-for="lang in availableLang" :key="lang.label" :name="lang.value" :label="lang.label" :ripple="false"/>
          </q-tabs>
        </div>
        <div class="left col-sm-4 col-xs-12">
          <div class="column q-mt-sm">
            <q-avatar size="200px" class="self-center">
              <img src="statics/avatar.jpg">
            </q-avatar>
            <div class="profil q-ma-sm text-body1 text-weight-medium text-justify">
              {{ $t('profile') }}
            </div>
            <q-list class="q-ma-sm rounded-borders" dense bordered>
              <q-item-label header>{{ $t('skill') }}</q-item-label>
              <q-item v-for="skill in skills" :key="skill.desc">
                <q-item-section>
                  {{ skill.desc }}
                </q-item-section>
                <q-item-section>
                  <q-rating v-model="skill.rate"
                    size="1em"
                    color="orange"
                    readonly
                  />
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-ma-sm rounded-borders" dense bordered>
              <q-item-label header>Contacts</q-item-label>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="eva-home"/>
                </q-item-section>
                <q-item-section>7 Chemin des tuileries<br>38570, Goncelin, France</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="eva-phone"/>
                </q-item-section>
                <q-item-section>+590690951361</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="eva-email"/>
                </q-item-section>
                <q-item-section>e.guillaume.gros@gmail.com</q-item-section>
              </q-item>
            </q-list>
            <div class="row justify-center q-ma-sm q-gutter-x-md">
                <q-btn outline round color="primary" icon="eva-github" @click="goTo(githubUrl)"/>
                <q-btn outline round color="primary" icon="eva-linkedin" @click="goTo(linkedInUrl)"/>
            </div>
          </div>
        </div>
        <div class="right col-sm-8 col-xs-12">
            <q-tabs active-color="primary">
              <q-route-tab
                :label="$t('experience')"
                icon="location_city"
                to="experience"
                exact
              />
              <q-route-tab
                :label="$t('education')"
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
.rb
  border 2px solid red
.left
  //border 2px solid magenta
  //max-width 35%
.right
  //border 2px solid green
  //align-items start
</style>

<script>
import { openURL } from 'quasar'

export default {
  name: 'ResumeLayout',

  mounted () {
    this.currentLang = this.$i18n.locale = this.$q.lang.isoName
  },

  data () {
    return {
      githubUrl: 'https://github.com/guigros',
      linkedInUrl: 'https://www.linkedin.com/in/guillaume-gros-2203',
      availableLang: [
        {
          label: 'FR',
          value: 'fr'
        },
        {
          label: 'EN',
          value: 'en-us'
        }
      ],
      currentLang: '',
      skills: [
        {
          desc: 'C/C++',
          rate: 3
        },
        {
          desc: 'C#',
          rate: 3
        },
        {
          desc: 'Javascript',
          rate: 4
        },
        {
          desc: 'HTML5/CSS3',
          rate: 3
        },
        {
          desc: 'Python',
          rate: 2
        }
      ]
    }
  },

  methods: {
    goTo (url) {
      openURL(url)
    }
  },

  watch: {
    currentLang (newLang) {
      this.$i18n.locale = newLang

      import(`quasar/lang/${newLang}`).then(language => {
        this.$q.lang.set(language.default)
      })
    }
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
