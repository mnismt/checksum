<template>
  <v-select
    label="Select Hash"
    :items="hashes"
    v-model="hash"
    autocomplete
    @change="selectHash"
  />
</template>

<script>
const hashes = require('crypto').getHashes()

export default {
  data: () => ({
    hashes,
    hash: 'md5'
  }),
  methods: {
    selectHash (hash) {
      this.$emit('change', hash)
    }
  }
}
</script>

<style>

</style>
