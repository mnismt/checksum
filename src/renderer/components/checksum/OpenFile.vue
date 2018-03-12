<template>
  <v-btn @click="selectFile()">Open</v-btn>
</template>

<script>
const dialog = require('electron').remote.dialog

export default {
  methods: {
    selectFile () {
      let path = dialog.showOpenDialog()
      if (typeof(path) === 'object') {
        this.$emit('select', path[0])
      }
    }
  }
}
</script>

<style>

</style>
