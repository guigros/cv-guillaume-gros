<template>
  <div class="contact-box" ref="contactBox">
<!--     <q-avatar :size="avatarSize + sizeUnit" class="avatar" :style="[_avatarStyle]">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar> -->
    <q-list separator>
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
      <q-item>
        <div class="links">
          <q-btn outline round color="primary" icon="eva-github" />
          <q-btn outline round color="primary" icon="eva-linkedin" />
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<style lang="stylus">
.contact-box
  border 2px solid $primary
  display flex
  .links
    display flex
    flex-grow 1
    justify-content space-evenly
</style>

<script>
export default {
  name: 'ContactBox',

  mounted () {
    this.contactBoxWidth = this.$el.getBoundingClientRect().width // return size in px
  },

  data () {
    return {
      contactBoxWidth: 0, // px unit
      avatarSize: 150, // px unit
      sizeUnit: 'px'
    }
  },

  computed: {
    _avatarStyle: function () {
      var style = {
        position: 'relative',
        left: ((this.contactBoxWidth / 2) - (this.avatarSize / 2)) + this.sizeUnit,
        top: (-(this.avatarSize / 2)) + this.sizeUnit
      }
      return style
    },
    _listStyle: function () {
      var style = {
        // 'margin-top': (-(this.avatarSize / 2)) + this.sizeUnit
      }
      return style
    }
  }
}
</script>
