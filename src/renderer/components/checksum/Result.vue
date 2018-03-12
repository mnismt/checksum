<template>
  <v-layout row wrap>
    <v-flex xs9>
      <v-text-field
        label="Hash"
        v-model="hashString"
        readonly
      />
    </v-flex>
    <v-flex xs3>
      <v-btn @click="copy()">Copy</v-btn>
    </v-flex>
    <v-snackbar
      top
      v-model="snackbar"
      :timeout="3000"
    >
      Copied
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
const { clipboard } = require('electron')

export default {
  props: ['hash-string'],
  data: () => ({
    snackbar: false
  }),
  methods: {
    copy () {
      this.snackbar = true
      clipboard.writeText(this.hashString)
    }
  }
}
</script>

<style>

</style>
